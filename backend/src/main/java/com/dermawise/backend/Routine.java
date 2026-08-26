package com.dermawise.backend;

import java.util.ArrayList;
import java.util.List;

public class Routine {

    private String umivalica;
    private String toner;
    private String serum;
    private String krema;
    private String spf;
    private List<String> aktivneSupstance = new ArrayList<>();

    public String getUmivalica() {
        return umivalica;
    }

    public void setUmivalica(String umivalica) {
        this.umivalica = umivalica;
    }

    public String getToner() {
		return toner;
	}

	public void setToner(String toner) {
		this.toner = toner;
	}

	public String getSerum() {
        return serum;
    }

    public void setSerum(String serum) {
        this.serum = serum;
    }

    public String getKrema() {
        return krema;
    }

    public void setKrema(String krema) {
        this.krema = krema;
    }

    public String getSpf() {
        return spf;
    }

    public void setSpf(String spf) {
        this.spf = spf;
    }

    public List<String> getAktivneSupstance() {
        return aktivneSupstance;
    }

    public void setAktivneSupstance(List<String> aktivneSupstance) {
        this.aktivneSupstance = aktivneSupstance;
    }

    public void dodajAktivnuSupstancu(String supstanca) {
    	if(!this.aktivneSupstance.contains(supstanca)) {
    		this.aktivneSupstance.add(supstanca);
    	}
    }
}
