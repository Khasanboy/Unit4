package com.unit4.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.unit4.model.Currency;
import com.unit4.service.CurrencyService;

@RestController
@RequestMapping("/api/currency")
public class CurrencyController {
	
	@Autowired
	private CurrencyService currencyService;
	
	@RequestMapping("/")
	public List<Currency> getAllCurrencies(){
		 return currencyService.getAllCurrencies();
				 
	}
	

}
