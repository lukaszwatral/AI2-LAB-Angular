import { Injectable } from '@angular/core';
import {Person} from './person';

@Injectable({
  providedIn: 'root',
})

export class PersonService {
  private persons: Person[] = [];

  constructor() {
    this.getPersons();
  }
  public getPersons() {
    try {
      this.persons = JSON.parse(localStorage.getItem('persons') || '[]');
      return this.persons
    } catch (e) {
      console.error(e);
      return [];
    }
  }

  public addPerson(person: Person) {
    this.persons.push(person);
    localStorage.setItem('persons', JSON.stringify(this.persons));
  }

  public getPersonById(id: number) {
    return this.persons[id];
  }

  public removePersonById(id: number) {
    this.persons.splice(id, 1);
    localStorage.setItem('persons', JSON.stringify(this.persons));
  }
}
