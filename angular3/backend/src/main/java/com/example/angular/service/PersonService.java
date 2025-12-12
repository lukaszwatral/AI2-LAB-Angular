package com.example.angular.service;

import org.springframework.stereotype.Service;
import java.util.List;
import com.example.angular.entity.Person;
import java.util.Map;
import com.example.angular.repository.PersonRepository;



@Service
public class PersonService {
    private final PersonRepository personRepository;

    public PersonService(PersonRepository personRepository) {
        this.personRepository = personRepository;
    }

    public List<Person> getAllPersons() {
        return personRepository.findAll();
    }

    public Person savePerson(Person person) {
        return personRepository.save(person);
    }

    public void deletePerson(int id) {
        personRepository.deleteById(id);
    }

    public Person updatePerson(Person person) {
        return personRepository.save(person);
    }

    public Person getPersonById(int id) {
        return personRepository.findById(id).orElseThrow();
    }

    public Person partialUpdatePerson(int id, Map<String, Object> updates) {
        Person person = personRepository.findById(id).orElseThrow();
        if (updates.containsKey("firstName")) {
            person.setFirstName((String) updates.get("firstName"));
        }
        if (updates.containsKey("familyName")) {
            person.setFamilyName((String) updates.get("familyName"));
        }
        if (updates.containsKey("age")) {
            person.setAge((Integer) updates.get("age"));
        }
        return personRepository.save(person);
    }

}
