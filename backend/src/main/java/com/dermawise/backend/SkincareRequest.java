package com.dermawise.backend;

import java.util.List;

public class SkincareRequest {

    private int godine;
    private String osecajNakonPranja;
    private List<String> glavniProblemi;
    private String osetljivostKoze;
    private String budzet;
    private String trudnicaIliDojilja;
    private String izlozenostSunca;
    private boolean koristioAktivneSupstance;
    private List<String> korisceniSastojci;

    public SkincareRequest() {
    }

    public int getGodine() {
        return godine;
    }

    public void setGodine(int godine) {
        this.godine = godine;
    }

    public String getOsecajNakonPranja() {
        return osecajNakonPranja;
    }

    public void setOsecajNakonPranja(String osecajNakonPranja) {
        this.osecajNakonPranja = osecajNakonPranja;
    }

    public List<String> getGlavniProblemi() {
        return glavniProblemi;
    }

    public void setGlavniProblemi(List<String> glavniProblemi) {
        this.glavniProblemi = glavniProblemi;
    }

    public String getOsetljivostKoze() {
        return osetljivostKoze;
    }

    public void setOsetljivostKoze(String osetljivostKoze) {
        this.osetljivostKoze = osetljivostKoze;
    }

    public String getBudzet() {
        return budzet;
    }

    public void setBudzet(String budzet) {
        this.budzet = budzet;
    }

    public String getTrudnicaIliDojilja() {
        return trudnicaIliDojilja;
    }

    public void setTrudnicaIliDojilja(String trudnicaIliDojilja) {
        this.trudnicaIliDojilja = trudnicaIliDojilja;
    }

    public String getIzlozenostSunca() {
        return izlozenostSunca;
    }

    public void setIzlozenostSunca(String izlozenostSunca) {
        this.izlozenostSunca = izlozenostSunca;
    }

    public boolean isKoristioAktivneSupstance() {
        return koristioAktivneSupstance;
    }

    public void setKoristioAktivneSupstance(boolean koristioAktivneSupstance) {
        this.koristioAktivneSupstance = koristioAktivneSupstance;
    }

    public List<String> getKorisceniSastojci() {
        return korisceniSastojci;
    }

    public void setKorisceniSastojci(List<String> korisceniSastojci) {
        this.korisceniSastojci = korisceniSastojci;
    }
}
