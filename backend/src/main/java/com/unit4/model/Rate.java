package com.unit4.model;

import java.io.Serializable;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="period")
public class Rate implements Serializable {

	private static final long serialVersionUID = -4014740135919988773L;

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Long id;
	
	private double baserate;

	public Rate() {
		super();
		
	}

	public Rate(double baserate) {
		super();
		this.baserate = baserate;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public double getBaserate() {
		return baserate;
	}

	public void setBaserate(double baserate) {
		this.baserate = baserate;
	}
	
	

}
