package com.dermawise.backend;

import java.util.ArrayList;
import java.util.List;

public class SkincareResult {

    private List<String> tipoviRutine = new ArrayList<>();
    private String tipKoze;
    private List<String> preporuceniProizvodi = new ArrayList<>();
    private List<String> aktivneSupstance = new ArrayList<>();
    private List<String> upozorenja = new ArrayList<>();

    public List<String> getTipoviRutine() {
        return tipoviRutine;
    }

    public void setTipoviRutine(List<String> tipoviRutine) {
        this.tipoviRutine = tipoviRutine;
    }

    public String getTipKoze() {
        return tipKoze;
    }

    public void setTipKoze(String tipKoze) {
        this.tipKoze = tipKoze;
    }

    public List<String> getPreporuceniProizvodi() {
        return preporuceniProizvodi;
    }

    public void setPreporuceniProizvodi(List<String> preporuceniProizvodi) {
        this.preporuceniProizvodi = preporuceniProizvodi;
    }

    public List<String> getAktivneSupstance() {
        return aktivneSupstance;
    }

    public void setAktivneSupstance(List<String> aktivneSupstance) {
        this.aktivneSupstance = aktivneSupstance;
    }

    public List<String> getUpozorenja() {
        return upozorenja;
    }

    public void setUpozorenja(List<String> upozorenja) {
        this.upozorenja = upozorenja;
    }

    public void dodajTipRutine(String tip) {
        this.tipoviRutine.add(tip);
    }

    public void dodajProizvod(String proizvod) {
        this.preporuceniProizvodi.add(proizvod);
    }

    public void dodajAktivnuSupstancu(String supstanca) {
        this.aktivneSupstance.add(supstanca);
    }

    public void dodajUpozorenje(String tekst) {
        this.upozorenja.add(tekst);
    }
}