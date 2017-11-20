package com.unit4.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="currency")
public class Currency implements Serializable {
	
	private static final long serialVersionUID = 8725742386469158461L;
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Long id;
	
	@Column
	private String code;
	
	@Column
	private boolean isbase;

	public Currency() {
		super();
	}

	public Currency(String code, boolean isbase) {
		super();
		this.code = code;
		this.isbase = isbase;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getCode() {
		return code;
	}

	public void setCode(String title) {
		this.code = title;
	}

	public boolean isbase() {
		return isbase;
	}

	public void setBase(boolean isbase) {
		this.isbase = isbase;
	}
	
	
	

}
