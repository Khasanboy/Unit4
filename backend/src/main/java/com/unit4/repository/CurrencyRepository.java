package com.unit4.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.unit4.model.Currency;

@Repository
public interface CurrencyRepository extends JpaRepository<Currency, Long> {

}
