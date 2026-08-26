package com.dermawise.backend;

import java.util.ArrayList;
import java.util.List;

public class SkincareResult {

    private TipKoze tipKoze;
    private List<String> kategorijaNege = new ArrayList<>();
    private Routine jutarnjaRutina = new Routine();
    private Routine vecernjaRutina = new Routine();
    private Dodaci dodaciRutini = new Dodaci();
    private List<String> upozorenja = new ArrayList<>();

    public TipKoze getTipKoze() {
        return tipKoze;
    }

    public void setTipKoze(TipKoze tipKoze) {
        this.tipKoze = tipKoze;
    }
    
    public List<String> getKategorijaNege() {
		return kategorijaNege;
	}

	public void setKategorijaNege(List<String> kategorijaNege) {
		this.kategorijaNege = kategorijaNege;
	}
	
	public void dodajKategorijuNege(String kategorija) {
	    if (!this.kategorijaNege.contains(kategorija)) {
	        this.kategorijaNege.add(kategorija);
	    }
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