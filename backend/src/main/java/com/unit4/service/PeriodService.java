package com.unit4.service;

import java.util.List;

import com.unit4.model.Period;

public interface PeriodService {
	
	public List<Period> getAllPeriods();
	
	public Period getPeriod(Long id);
	
	public void addPeriod(Period period);
	
	public void deletePeriod(Long id);
	
	public void updatePeriod(Period period);

}
