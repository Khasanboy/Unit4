package com.unit4.serviceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.unit4.model.Period;
import com.unit4.repository.PeriodRepository;
import com.unit4.service.PeriodService;

@Service
public class PeriodServiceImpl implements PeriodService {
	
	@Autowired
	PeriodRepository periodRepository;

	@Override
	public List<Period> getAllPeriods() {
		return periodRepository.findAll();
	}

	@Override
	public Period getPeriod(Long id) {
		return periodRepository.findOne(id);
	}

	@Override
	public void addPeriod(Period period) {
		periodRepository.save(period);
	}

	@Override
	public void deletePeriod(Long id) {
		periodRepository.delete(id);
	}

	@Override
	public void updatePeriod(Period period) {
		periodRepository.save(period);
	}

}
