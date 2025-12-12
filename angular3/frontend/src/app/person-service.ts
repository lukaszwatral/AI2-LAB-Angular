import { Injectable } from '@angular/core';
import {Person} from './person';
import {Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})

@Injectable({ providedIn: 'root' })
export class PersonService {
  public personsChanged = new Subject<void>();
  constructor(private http: HttpClient) {}

  public getPersons() {
    return this.http.get<Person[]>('http://localhost:8080/api/persons');
  }

  public addPerson(person: Person) {
    return this.http.post<Person>('http://localhost:8080/api/persons', person)
      .subscribe(() => this.personsChanged.next());
  }

  public getPersonById(id: number) {
    return this.http.get<Person>(`http://localhost:8080/api/persons/${id}`);
  }

  public removePersonById(id: number) {
    return this.http.delete(`http://localhost:8080/api/persons/${id}`);
  }

}
