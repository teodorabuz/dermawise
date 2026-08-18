package com.dermawise.backend;

import java.util.ArrayList;
import java.util.List;

public class SkincareResult {

    private String tipKoze;
    private Routine jutarnjaRutina = new Routine();
    private Routine vecernjaRutina = new Routine();
    private List<String> upozorenja = new ArrayList<>();

    public String getTipKoze() {
        return tipKoze;
    }

    public void setTipKoze(String tipKoze) {
        this.tipKoze = tipKoze;
    }

    public Routine getJutarnjaRutina() {
        return jutarnjaRutina;
    }

    public void setJutarnjaRutina(Routine jutarnjaRutina) {
        this.jutarnjaRutina = jutarnjaRutina;
    }

    public Routine getVecernjaRutina() {
        return vecernjaRutina;
    }

    public void setVecernjaRutina(Routine vecernjaRutina) {
        this.vecernjaRutina = vecernjaRutina;
    }

    public List<String> getUpozorenja() {
        return upozorenja;
    }

    public void setUpozorenja(List<String> upozorenja) {
        this.upozorenja = upozorenja;
    }

    public void dodajUpozorenje(String tekst) {
        this.upozorenja.add(tekst);
    }
}