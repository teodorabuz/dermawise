import React, { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    godine: "",
    osecajNakonPranja: "",
    glavniProblemi: [],
    osetljivostKoze: "",
    budzet: "",
    trudnicaIliDojilja: "",
    izlozenostSunca: "",
    koristioAktivneSupstance: "",
    korisceniSastojci: [],
  });

  return (
    <div>
      <h1>DermaWise</h1>
      <p>Forma dolazi u sledećem koraku.</p>
    </div>
  );
}

export default App;
