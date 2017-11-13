package com.unit4.model;

import java.io.Serializable;
import java.time.YearMonth;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="period")
public class Period implements Serializable {

	private static final long serialVersionUID = 3315403438085672617L;
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Long id;
	
	private YearMonth title;
	
	private int rates[];

	public Period() {
		super();
	}

	public Period(YearMonth title, int rates[]) {
		super();
		this.title = title;
		this.rates = rates;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public YearMonth getTitle() {
		return title;
	}

	public void setTitle(YearMonth title) {
		this.title = title;
	}

	public int[] getRates() {
		return rates;
	}

	public void setRates(int[] rates) {
		this.rates = rates;
	}
	

}
