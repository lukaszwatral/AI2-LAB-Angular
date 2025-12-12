package com.example.angular.controller;

import org.springframework.web.bind.annotation.*;
import java.util.List;
import com.example.angular.entity.Person;
import java.util.Map;
import com.example.angular.service.PersonService;



@RestController
@CrossOrigin(origins = "http://localhost:53674")
@RequestMapping("/api/persons")
public class PersonController {
    private final PersonService personService;

    public PersonController(PersonService personService) {
        this.personService = personService;
    }

    @GetMapping
    public List<Person> getAllPersons() {
        return personService.getAllPersons();
    }

    @PostMapping
    public Person createPerson(@RequestBody Person person) {
        return personService.savePerson(person);
    }

    @GetMapping("/{id}")
    public Person getPersonById(@PathVariable int id) {
        return personService.getPersonById(id);
    }

    @PutMapping("/{id}")
    public Person updatePerson(@PathVariable int id, @RequestBody Person person) {
        person.setId(id);
        return personService.updatePerson(person);
    }
    @PatchMapping("/{id}")
    public Person partialUpdatePerson(@PathVariable int id, @RequestBody Map<String, Object> updates) {
        return personService.partialUpdatePerson(id, updates);
    }

    @DeleteMapping("/{id}")
    public void deletePerson(@PathVariable int id) {
        personService.deletePerson(id);
    }



}
