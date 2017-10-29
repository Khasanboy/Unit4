package com.unit4.serviceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.unit4.model.Currency;
import com.unit4.repository.CurrencyRepository;
import com.unit4.service.CurrencyService;

@Service
public class CurrencyServiceImpl implements CurrencyService {
	
	@Autowired
	CurrencyRepository currencyRepository;

	@Override
	public List<Currency> getAllCurrencies() {
		return currencyRepository.findAll();
	}

	@Override
	public Currency getCurrency(Long id) {
		return currencyRepository.findOne(id);
	}

	@Override
	public void addCurrency(Currency currency) {
		currencyRepository.save(currency);
		
	}

	@Override
	public void deleteCurrency(Long id) {
		currencyRepository.delete(id);
	}

	@Override
	public void updateCurrency(Currency currency) {
		currencyRepository.save(currency);
	}

}
