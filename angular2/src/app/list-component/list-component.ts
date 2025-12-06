import {Component, inject, OnInit} from '@angular/core';
import {PersonService} from '../person-service';
import {Person} from '../person';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-list-component',
  imports: [
    RouterLink
  ],
  templateUrl: './list-component.html',
  styleUrl: './list-component.scss',
})
export class ListComponent implements OnInit{

  public personService = inject(PersonService);
  persons: Person[] = [];
  ngOnInit(): void {
    this.persons = this.personService.getPersons();
  }
}
