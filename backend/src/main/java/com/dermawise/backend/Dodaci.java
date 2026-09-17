package com.dermawise.backend;

import java.util.ArrayList;
import java.util.List;

public class Dodaci {

	private String maska;
	private String esencija;
	private String ampule;
	private List<String> uputstvo = new ArrayList<>();


	public String getMaska() {
		return maska;
	}
	public void setMaska(String maska) {
		this.maska = maska;
	}
	public String getEsencija() {
		return esencija;
	}
	public void setEsencija(String esencija) {
		this.esencija = esencija;
	}
	public String getAmpule() {
		return ampule;
	}
	public void setAmpule(String ampule) {
		this.ampule = ampule;
	}
	public List<String> getUputstvo() {
		return uputstvo;
	}
	public void setUputstvo(List<String> uputstvo) {
		this.uputstvo = uputstvo;
	}
	public void dodajUputstvo(String uputstvo) {
		if (!this.uputstvo.contains(uputstvo)) {
			this.uputstvo.add(uputstvo);
		}
	}

}