package com.dermawise.backend;

import java.util.List;

public class SkincareRequest {

    private int godine;
    private Pol pol;
    private OsecajNakonPranja osecajNakonPranja;
    private List<GlavniProblem> glavniProblemi;
    private OsetljivostKoze osetljivostKoze;
    private Budzet budzet;
    private String trudnicaIliDojilja;
    private IzlozenostSuncu izlozenostSunca;
    private String koristioAktivneSupstance;
    private List<Sastojak> korisceniSastojci;

    public SkincareRequest() {
    }

    public int getGodine() {
        return godine;
    }

    public void setGodine(int godine) {
        this.godine = godine;
    }

    public OsecajNakonPranja getOsecajNakonPranja() {
        return osecajNakonPranja;
    }

    public void setOsecajNakonPranja(OsecajNakonPranja osecajNakonPranja) {
        this.osecajNakonPranja = osecajNakonPranja;
    }

    public List<GlavniProblem> getGlavniProblemi() {
        return glavniProblemi;
    }

    public void setGlavniProblemi(List<GlavniProblem> glavniProblemi) {
        this.glavniProblemi = glavniProblemi;
    }

    public OsetljivostKoze getOsetljivostKoze() {
        return osetljivostKoze;
    }

    public void setOsetljivostKoze(OsetljivostKoze osetljivostKoze) {
        this.osetljivostKoze = osetljivostKoze;
    }

    public Budzet getBudzet() {
        return budzet;
    }

    public void setBudzet(Budzet budzet) {
        this.budzet = budzet;
    }

    public String getTrudnicaIliDojilja() {
        return trudnicaIliDojilja;
    }

    public void setTrudnicaIliDojilja(String trudnicaIliDojilja) {
        this.trudnicaIliDojilja = trudnicaIliDojilja;
    }

    public IzlozenostSuncu getIzlozenostSunca() {
        return izlozenostSunca;
    }

    public void setIzlozenostSunca(IzlozenostSuncu izlozenostSunca) {
        this.izlozenostSunca = izlozenostSunca;
    }

    public String getKoristioAktivneSupstance() {
        return koristioAktivneSupstance;
    }

    public void setKoristioAktivneSupstance(String koristioAktivneSupstance) {
        this.koristioAktivneSupstance = koristioAktivneSupstance;
    }

    public List<Sastojak> getKorisceniSastojci() {
        return korisceniSastojci;
    }

    public void setKorisceniSastojci(List<Sastojak> korisceniSastojci) {
        this.korisceniSastojci = korisceniSastojci;
    }

	public Pol getPol() {
		return pol;
	}

	public void setPol(Pol pol) {
		this.pol = pol;
	}
    
}
