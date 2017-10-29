package com.unit4.model;

import java.io.Serializable;
import java.util.Date;
import java.util.Set;

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
	
	private Date period;
	
	private Set<Currency> currencies;

	public Period() {
		super();
	}

	public Period(Date period, Set<Currency> currencies) {
		super();
		this.period = period;
		this.currencies = currencies;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Date getPeriod() {
		return period;
	}

	public void setPeriod(Date period) {
		this.period = period;
	}

	public Set<Currency> getCurrencies() {
		return currencies;
	}

	public void setCurrencies(Set<Currency> currencies) {
		this.currencies = currencies;
	}
	

}
