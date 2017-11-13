package com.unit4.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.unit4.model.Period;
import com.unit4.service.PeriodService;

@RestController
@RequestMapping("/api/period")
public class PeriodController {
	
	@Autowired
	private PeriodService periodService;
	
	@RequestMapping("/")
	public List<Period> getAllCurrencies(){
		 return periodService.getAllPeriods();
				 
	}
	

}
