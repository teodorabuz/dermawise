import React, { useState } from "react";
import "./App.css";

function App() {
  const [korak, setKorak] = useState(0);

  const [formData, setFormData] = useState({
    godine: "",
    pol: "",
    osecajNakonPranja: "",
    glavniProblemi: [],
    osetljivostKoze: "",
    budzet: "",
    trudnicaIliDojilja: "",
    izlozenostSunca: "",
    koristioAktivneSupstance: "",
    korisceniSastojci: [],
  });
  const [rezultat, setRezultat] = useState(null);
  const [ucitavanje, setUcitavanje] = useState(false);
  const [greska, setGreska] = useState(null);

  const azurirajPolje = (naziv, vrednost) => {
    setFormData({ ...formData, [naziv]: vrednost });
  };

  const promeniProblem = (vrednost, jeCekirano) => {
    if (jeCekirano) {
      setFormData({
        ...formData,
        glavniProblemi: [...formData.glavniProblemi, vrednost],
      });
    } else {
      setFormData({
        ...formData,
        glavniProblemi: formData.glavniProblemi.filter((p) => p !== vrednost),
      });
    }
  };

  const promeniSastojak = (vrednost, jeCekirano) => {
    if (jeCekirano) {
      setFormData({
        ...formData,
        korisceniSastojci: [...formData.korisceniSastojci, vrednost],
      });
    } else {
      setFormData({
        ...formData,
        korisceniSastojci: formData.korisceniSastojci.filter(
          (s) => s !== vrednost,
        ),
      });
    }
  };

  const sledeciKorak = () => {
    setKorak(korak + 1);
  };

  const prethodniKorak = () => {
    setKorak(korak - 1);
  };

  const posleIzboraPola = () => {
    if (formData.pol === "MUSKI") {
      setFormData({ ...formData, trudnicaIliDojilja: "Ne" });
      setKorak(4);
    } else {
      setKorak(3);
    }
  };

  const posleAktivneSupstance = () => {
    if (
      formData.koristioAktivneSupstance === "Ne" ||
      formData.koristioAktivneSupstance === "Ne_znam"
    ) {
      setKorak(10);
    } else {
      setKorak(9);
    }
  };

  const posaljiPodatke = async () => {
    setUcitavanje(true);
    setGreska(null);
    setKorak(11);

    try {
      const odgovor = await fetch(
        "http://localhost:8080/api/skincare/analyze",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        },
      );

      if (!odgovor.ok) {
        throw new Error("Greška na serveru: " + odgovor.status);
      }

      const podaci = await odgovor.json();
      setRezultat(podaci);
    } catch (e) {
      setGreska(
        "Došlo je do greške prilikom komunikacije sa serverom. Proveri da li je backend pokrenut.",
      );
      console.error(e);
    } finally {
      setUcitavanje(false);
    }
  };

  return (
    <div className="container">
      <h1 className="naslov">DermaWise</h1>

      {korak === 0 && (
        <div className="korak-sadrzaj" style={{ textAlign: "center" }}>
          <p
            style={{
              fontSize: "16px",
              lineHeight: "1.6",
              marginBottom: "24px",
            }}
          >
            DermaWise je ekspertni sistem koji na osnovu vaših odgovora o tipu
            kože, navikama i potrebama kreira personalizovanu jutarnju i
            večernju rutinu nege kože. Odgovorite na nekoliko kratkih pitanja, a
            sistem će vam predložiti proizvode i aktivne supstance prilagođene
            baš vama.
          </p>
          <div className="dugmici">
            <button className="btn-dalje" onClick={() => setKorak(1)}>
              Započni test
            </button>
          </div>
        </div>
      )}

      {korak === 1 && (
        <div className="korak-sadrzaj">
          <h2>1. Koliko imate godina?</h2>
          <input
            type="number"
            className="unos-broj"
            value={formData.godine}
            onChange={(e) => azurirajPolje("godine", e.target.value)}
            placeholder="Unesite broj godina"
          />
          <br />
          <br />
          <div className="dugmici">
            <button className="btn-nazad" onClick={prethodniKorak}>
              Nazad
            </button>{" "}
            <button
              className="btn-dalje"
              onClick={sledeciKorak}
              disabled={!formData.godine}
            >
              Dalje
            </button>
          </div>
        </div>
      )}

      {korak === 2 && (
        <div className="korak-sadrzaj">
          <h2>2. Pol:</h2>
          <label className="opcija">
            <input
              type="radio"
              name="pol"
              value="ZENSKI"
              checked={formData.pol === "ZENSKI"}
              onChange={(e) => azurirajPolje("pol", e.target.value)}
            />
            Ženski
          </label>
          <br />
          <label className="opcija">
            <input
              type="radio"
              name="pol"
              value="MUSKI"
              checked={formData.pol === "MUSKI"}
              onChange={(e) => azurirajPolje("pol", e.target.value)}
            />
            Muški
          </label>
          <br />
          <label className="opcija">
            <input
              type="radio"
              name="pol"
              value="NEDEFINISANO"
              checked={formData.pol === "NEDEFINISANO"}
              onChange={(e) => azurirajPolje("pol", e.target.value)}
            />
            Ne želim da iskažem
          </label>
          <br />
          <br />
          <div className="dugmici">
            <button className="btn-nazad" onClick={prethodniKorak}>
              Nazad
            </button>{" "}
            <button
              className="btn-dalje"
              onClick={posleIzboraPola}
              disabled={!formData.pol}
            >
              Dalje
            </button>
          </div>
        </div>
      )}

      {korak === 4 && (
        <div className="korak-sadrzaj">
          <h2>
            3. Kakav vam je osećaj na licu sat vremena nakon pranja samo vodom?
          </h2>
          <label className="opcija">
            <input
              type="radio"
              name="osecajNakonPranja"
              value="ZATEGNUTO"
              checked={formData.osecajNakonPranja === "ZATEGNUTO"}
              onChange={(e) =>
                azurirajPolje("osecajNakonPranja", e.target.value)
              }
            />
            Zategnuto
          </label>
          <br />
          <label className="opcija">
            <input
              type="radio"
              name="osecajNakonPranja"
              value="SJAJNO_T_ZONA"
              checked={formData.osecajNakonPranja === "SJAJNO_T_ZONA"}
              onChange={(e) =>
                azurirajPolje("osecajNakonPranja", e.target.value)
              }
            />
            Sjajno u T-zoni (čelo, nos, brada)
          </label>
          <br />
          <label className="opcija">
            <input
              type="radio"
              name="osecajNakonPranja"
              value="SJAJNO_CELO"
              checked={formData.osecajNakonPranja === "SJAJNO_CELO"}
              onChange={(e) =>
                azurirajPolje("osecajNakonPranja", e.target.value)
              }
            />
            Sjajno na celom licu
          </label>
          <br />
          <label className="opcija">
            <input
              type="radio"
              name="osecajNakonPranja"
              value="NORMALNO"
              checked={formData.osecajNakonPranja === "NORMALNO"}
              onChange={(e) =>
                azurirajPolje("osecajNakonPranja", e.target.value)
              }
            />
            Normalno
          </label>
          <br />
          <br />
          <div className="dugmici">
            <button className="btn-nazad" onClick={prethodniKorak}>
              Nazad
            </button>{" "}
            <button
              className="btn-dalje"
              onClick={sledeciKorak}
              disabled={!formData.osecajNakonPranja}
            >
              Dalje
            </button>
          </div>
        </div>
      )}

      {korak === 5 && (
        <div className="korak-sadrzaj">
          <h2>
            4. Koji su vaši glavni problemi sa kožom? (označite sve što važi)
          </h2>
          <label className="opcija">
            <input
              type="checkbox"
              value="AKNE"
              checked={formData.glavniProblemi.includes("AKNE")}
              onChange={(e) => promeniProblem(e.target.value, e.target.checked)}
            />
            Akne
          </label>
          <br />
          <label className="opcija">
            <input
              type="checkbox"
              value="BORE"
              checked={formData.glavniProblemi.includes("BORE")}
              onChange={(e) => promeniProblem(e.target.value, e.target.checked)}
            />
            Bore
          </label>
          <br />
          <label className="opcija">
            <input
              type="checkbox"
              value="FLEKE"
              checked={formData.glavniProblemi.includes("FLEKE")}
              onChange={(e) => promeniProblem(e.target.value, e.target.checked)}
            />
            Fleke
          </label>
          <br />
          <label className="opcija">
            <input
              type="checkbox"
              value="DEHIDRATACIJA"
              checked={formData.glavniProblemi.includes("DEHIDRATACIJA")}
              onChange={(e) => promeniProblem(e.target.value, e.target.checked)}
            />
            Dehidratacija
          </label>
          <br />
          <label className="opcija">
            <input
              type="checkbox"
              value="PROSIRENE_PORE"
              checked={formData.glavniProblemi.includes("PROSIRENE_PORE")}
              onChange={(e) => promeniProblem(e.target.value, e.target.checked)}
            />
            Proširene pore
          </label>
          <br />
          <label className="opcija">
            <input
              type="checkbox"
              value="NIJEDAN"
              checked={formData.glavniProblemi.includes("NIJEDAN")}
              onChange={(e) => promeniProblem(e.target.value, e.target.checked)}
            />
            Nijedan
          </label>
          <br />
          <br />
          <div className="dugmici">
            <button className="btn-nazad" onClick={prethodniKorak}>
              Nazad
            </button>{" "}
            <button
              className="btn-dalje"
              onClick={sledeciKorak}
              disabled={formData.glavniProblemi.length === 0}
            >
              Dalje
            </button>
          </div>
        </div>
      )}

      {korak === 6 && (
        <div className="korak-sadrzaj">
          <h2>5. Kako biste opisali osetljivost vaše kože?</h2>
          <label className="opcija">
            <input
              type="radio"
              name="osetljivostKoze"
              value="SKLONA_IRITACIJAMA"
              checked={formData.osetljivostKoze === "SKLONA_IRITACIJAMA"}
              onChange={(e) => azurirajPolje("osetljivostKoze", e.target.value)}
            />
            Sklona iritacijama i crvenilu
          </label>
          <br />
          <label className="opcija">
            <input
              type="radio"
              name="osetljivostKoze"
              value="KONSTANTNO_PERUTANJE"
              checked={formData.osetljivostKoze === "KONSTANTNO_PERUTANJE"}
              onChange={(e) => azurirajPolje("osetljivostKoze", e.target.value)}
            />
            Konstantno perutanje
          </label>
          <br />
          <label className="opcija">
            <input
              type="radio"
              name="osetljivostKoze"
              value="NORMALNA_OTPORNOST"
              checked={formData.osetljivostKoze === "NORMALNA_OTPORNOST"}
              onChange={(e) => azurirajPolje("osetljivostKoze", e.target.value)}
            />
            Normalna otpornost
          </label>
          <br />
          <br />
          <div className="dugmici">
            <button className="btn-nazad" onClick={prethodniKorak}>
              Nazad
            </button>{" "}
            <button
              className="btn-dalje"
              onClick={sledeciKorak}
              disabled={!formData.osetljivostKoze}
            >
              Dalje
            </button>
          </div>
        </div>
      )}

      {korak === 3 && (
        <div className="korak-sadrzaj">
          <h2>2.1. Da li ste trudni ili dojite?</h2>
          <label className="opcija">
            <input
              type="radio"
              name="trudnicaIliDojilja"
              value="Da"
              checked={formData.trudnicaIliDojilja === "Da"}
              onChange={(e) =>
                azurirajPolje("trudnicaIliDojilja", e.target.value)
              }
            />
            Da
          </label>
          <br />
          <label className="opcija">
            <input
              type="radio"
              name="trudnicaIliDojilja"
              value="Ne"
              checked={formData.trudnicaIliDojilja === "Ne"}
              onChange={(e) =>
                azurirajPolje("trudnicaIliDojilja", e.target.value)
              }
            />
            Ne
          </label>
          <br />
          <br />
          <div className="dugmici">
            <button className="btn-nazad" onClick={prethodniKorak}>
              Nazad
            </button>{" "}
            <button
              className="btn-dalje"
              onClick={sledeciKorak}
              disabled={!formData.trudnicaIliDojilja}
            >
              Dalje
            </button>
          </div>
        </div>
      )}

      {korak === 7 && (
        <div className="korak-sadrzaj">
          <h2>6. Koliko vremena provodite izloženi suncu?</h2>
          <label className="opcija">
            <input
              type="radio"
              name="izlozenostSunca"
              value="UGLAVNOM_U_ZATVORENOM"
              checked={formData.izlozenostSunca === "UGLAVNOM_U_ZATVORENOM"}
              onChange={(e) => azurirajPolje("izlozenostSunca", e.target.value)}
            />
            Uglavnom sam u zatvorenom prostoru
          </label>
          <br />
          <label className="opcija">
            <input
              type="radio"
              name="izlozenostSunca"
              value="POVREMENO_NA_OTVORENOM"
              checked={formData.izlozenostSunca === "POVREMENO_NA_OTVORENOM"}
              onChange={(e) => azurirajPolje("izlozenostSunca", e.target.value)}
            />
            Povremeno provodim vreme na otvorenom, prošetam
          </label>
          <br />
          <label className="opcija">
            <input
              type="radio"
              name="izlozenostSunca"
              value="DOSTA_VREMENA_NA_OTVORENOM"
              checked={
                formData.izlozenostSunca === "DoOSTA_VREMENA_NA_OTVORENOM"
              }
              onChange={(e) => azurirajPolje("izlozenostSunca", e.target.value)}
            />
            Provodim dosta vremena na otvorenom
          </label>
          <br />
          <br />
          <div className="dugmici">
            <button className="btn-nazad" onClick={prethodniKorak}>
              Nazad
            </button>{" "}
            <button
              className="btn-dalje"
              onClick={sledeciKorak}
              disabled={!formData.izlozenostSunca}
            >
              Dalje
            </button>
          </div>
        </div>
      )}

      {korak === 8 && (
        <div className="korak-sadrzaj">
          <h2>7. Da li ste ranije koristili aktivne supstance u nezi kože?</h2>
          <label className="opcija">
            <input
              type="radio"
              name="koristioAktivneSupstance"
              value="Da"
              checked={formData.koristioAktivneSupstance === "Da"}
              onChange={(e) =>
                azurirajPolje("koristioAktivneSupstance", e.target.value)
              }
            />
            Da
          </label>
          <br />
          <label className="opcija">
            <input
              type="radio"
              name="koristioAktivneSupstance"
              value="Ne"
              checked={formData.koristioAktivneSupstance === "Ne"}
              onChange={(e) =>
                azurirajPolje("koristioAktivneSupstance", e.target.value)
              }
            />
            Ne
          </label>
          <br />
          <label className="opcija">
            <input
              type="radio"
              name="koristioAktivneSupstance"
              value="Ne_znam"
              checked={formData.koristioAktivneSupstance === "Ne_znam"}
              onChange={(e) =>
                azurirajPolje("koristioAktivneSupstance", e.target.value)
              }
            />
            Ne znam
          </label>
          <br />
          <br />
          <div className="dugmici">
            <button className="btn-nazad" onClick={prethodniKorak}>
              Nazad
            </button>{" "}
            <button
              className="btn-dalje"
              onClick={posleAktivneSupstance}
              disabled={!formData.koristioAktivneSupstance}
            >
              Dalje
            </button>
          </div>
        </div>
      )}

      {korak === 9 && (
        <div className="korak-sadrzaj">
          <h2>
            7.1. Koje aktivne supstance ste koristili? (označite sve što važi)
          </h2>
          {[
            "RETINOL",
            "SALICILNA_KISELINA",
            "GLIKOLNA_KISELINA",
            "VITAMIN_C",
            "NIACINAMID",
            "CERAMIDI",
            "AZELAICNA_KISELINA",
          ].map((sastojak) => (
            <div key={sastojak}>
              <label className="opcija">
                <input
                  type="checkbox"
                  value={sastojak}
                  checked={formData.korisceniSastojci.includes(sastojak)}
                  onChange={(e) =>
                    promeniSastojak(e.target.value, e.target.checked)
                  }
                />
                {sastojak}
              </label>
            </div>
          ))}
          <br />
          <div className="dugmici">
            <button className="btn-nazad" onClick={prethodniKorak}>
              Nazad
            </button>{" "}
            <button
              className="btn-dalje"
              onClick={sledeciKorak}
              disabled={formData.korisceniSastojci.length === 0}
            >
              Dalje
            </button>
          </div>
        </div>
      )}

      {korak === 10 && (
        <div className="korak-sadrzaj">
          <h2>8. Koji je vaš budžet za proizvode za negu kože?</h2>
          <label className="opcija">
            <input
              type="radio"
              name="budzet"
              value="EKONOMICAN"
              checked={formData.budzet === "EKONOMICAN"}
              onChange={(e) => azurirajPolje("budzet", e.target.value)}
            />
            Ekonomičan
          </label>
          <br />
          <label className="opcija">
            <input
              type="radio"
              name="budzet"
              value="SREDNJI"
              checked={formData.budzet === "SREDNJI"}
              onChange={(e) => azurirajPolje("budzet", e.target.value)}
            />
            Srednji
          </label>
          <br />
          <label className="opcija">
            <input
              type="radio"
              name="budzet"
              value="PREMIUM"
              checked={formData.budzet === "PREMIUM"}
              onChange={(e) => azurirajPolje("budzet", e.target.value)}
            />
            Premium
          </label>
          <br />
          <br />
          <div className="dugmici">
            <button className="btn-nazad" onClick={prethodniKorak}>
              Nazad
            </button>{" "}
            <button
              className="btn-dalje"
              onClick={posaljiPodatke}
              disabled={!formData.budzet}
            >
              Završi
            </button>
          </div>
        </div>
      )}

      {korak === 11 && (
        <div className="korak-sadrzaj">
          {ucitavanje && (
            <p style={{ textAlign: "center" }}>Učitavanje rezultata...</p>
          )}

          {greska && (
            <div style={{ textAlign: "center" }}>
              <p className="greska-tekst">{greska}</p>
              <div className="dugmici">
                <button className="btn-nazad" onClick={() => setKorak(10)}>
                  Nazad
                </button>
              </div>
            </div>
          )}

          {rezultat && !ucitavanje && (
            <div>
              <h2>Vaš tip kože: {rezultat.tipKoze}</h2>

              <div className="rezultat-sekcija">
                <h3>Jutarnja rutina</h3>
                <p>
                  <strong>Umivalica:</strong>{" "}
                  {rezultat.jutarnjaRutina.umivalica || "-"}
                </p>
                <p>
                  <strong>Toner:</strong> {rezultat.jutarnjaRutina.toner || "-"}
                </p>
                <p>
                  <strong>Serum:</strong> {rezultat.jutarnjaRutina.serum || "-"}
                </p>
                <p>
                  <strong>Krema:</strong> {rezultat.jutarnjaRutina.krema || "-"}
                </p>
                <p>
                  <strong>SPF:</strong> {rezultat.jutarnjaRutina.spf || "-"}
                </p>
                <p>
                  <strong>Aktivne supstance:</strong>{" "}
                  {rezultat.jutarnjaRutina.aktivneSupstance.length > 0
                    ? rezultat.jutarnjaRutina.aktivneSupstance.join(", ")
                    : "-"}
                </p>
              </div>

              <div className="rezultat-sekcija">
                <h3>Večernja rutina</h3>
                <p>
                  <strong>Umivalica:</strong>{" "}
                  {rezultat.vecernjaRutina.umivalica || "-"}
                </p>
                <p>
                  <strong>Toner:</strong> {rezultat.jutarnjaRutina.toner || "-"}
                </p>
                <p>
                  <strong>Serum:</strong> {rezultat.vecernjaRutina.serum || "-"}
                </p>
                <p>
                  <strong>Krema:</strong> {rezultat.vecernjaRutina.krema || "-"}
                </p>
                <p>
                  <strong>Aktivne supstance:</strong>{" "}
                  {rezultat.vecernjaRutina.aktivneSupstance.length > 0
                    ? rezultat.vecernjaRutina.aktivneSupstance.join(", ")
                    : "-"}
                </p>
              </div>

              {rezultat.dodaciRutini && (
                <div className="rezultat-sekcija">
                  <h3>Dodaci</h3>
                  <p>
                    <strong>Maska:</strong> {rezultat.dodaciRutini.maska || "-"}
                  </p>
                  <p>
                    <strong>Esencija:</strong>{" "}
                    {rezultat.dodaciRutini.esencija || "-"}
                  </p>
                  <p>
                    <strong>Ampule:</strong>{" "}
                    {rezultat.dodaciRutini.ampule || "-"}
                  </p>
                  <p>
                    <strong>Uputstvo:</strong>{" "}
                    {rezultat.dodaciRutini.uputstvo || "-"}
                  </p>
                </div>
              )}

              {rezultat.upozorenja.length > 0 && (
                <div className="rezultat-sekcija">
                  <h3>Upozorenja</h3>
                  <ul>
                    {rezultat.upozorenja.map((u, i) => (
                      <li key={i}>{u}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
