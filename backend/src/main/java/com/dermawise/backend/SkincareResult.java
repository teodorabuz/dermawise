package com.dermawise.backend;

import java.util.ArrayList;
import java.util.List;

public class SkincareResult {

    private String tipKoze;
    private String kategorijaNege;
    private Routine jutarnjaRutina = new Routine();
    private Routine vecernjaRutina = new Routine();
    private Dodaci dodaciRutini = new Dodaci();
    private List<String> upozorenja = new ArrayList<>();

    public String getTipKoze() {
        return tipKoze;
    }

    public void setTipKoze(String tipKoze) {
        this.tipKoze = tipKoze;
    }
    
    public String getKategorijaNege() {
		return kategorijaNege;
	}

	public void setKategorijaNege(String kategorijaNege) {
		this.kategorijaNege = kategorijaNege;
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

    public Dodaci getDodaciRutini() {
		return dodaciRutini;
	}

	public void setDodaciRutini(Dodaci dodaciRutini) {
		this.dodaciRutini = dodaciRutini;
	}

	public void setUpozorenja(List<String> upozorenja) {
        this.upozorenja = upozorenja;
    }

    public void dodajUpozorenje(String tekst) {
        this.upozorenja.add(tekst);
    }
}