import {Component, inject, OnInit} from '@angular/core';
import {PersonService} from '../person-service';
import {Person} from '../person';
import {RouterLink} from '@angular/router';
import {MatDivider, MatList, MatListItem} from '@angular/material/list';
import {MatIcon} from '@angular/material/icon';
import {MatIconButton} from '@angular/material/button';

@Component({
  selector: 'app-list-component',
  imports: [
    RouterLink,
    MatListItem,
    MatList,
    MatIcon,
    MatIconButton,
    MatDivider
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
