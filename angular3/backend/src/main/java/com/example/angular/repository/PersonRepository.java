package com.example.angular.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.angular.entity.Person;

public interface PersonRepository extends JpaRepository<Person, Integer> {
}
