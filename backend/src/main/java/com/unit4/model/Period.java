package com.unit4.model;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="period")
public class Period implements Serializable {

	private static final long serialVersionUID = 3315403438085672617L;
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Long id;
	
	private Date title;
	
	@ManyToOne
	private List<Rate> rates;

	public Period() {
		super();
	}

	public Period(Date title, List<Rate> rates) {
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

	public Date getTitle() {
		return title;
	}

	public void setTitle(Date title) {
		this.title = title;
	}

	public List<Rate> getRates() {
		return rates;
	}

	public void setRates(List<Rate> rates) {
		this.rates = rates;
	}
	

}
