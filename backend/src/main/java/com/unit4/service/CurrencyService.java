package com.unit4.service;

import java.util.List;

import com.unit4.model.Currency;

public interface CurrencyService {
	
	public List<Currency> getAllCurrencies();
	
	public Currency getCurrency(Long id);
	
	public void addCurrency(Currency currency);
	
	public void deleteCurrency(Long id);
	
	public void updateCurrency(Currency currency);

}
