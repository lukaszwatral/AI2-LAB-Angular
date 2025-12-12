import {Component, inject, OnInit} from '@angular/core';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {Person} from '../person';
import {PersonService} from '../person-service';
import {MatCard, MatCardActions, MatCardContent, MatCardTitle} from '@angular/material/card';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-details-component',
  templateUrl: './details-component.html',
  styleUrl: './details-component.scss',
  imports: [
    RouterLink,
    MatCardTitle,
    MatCard,
    MatCardContent,
    MatCardActions,
    MatButton
  ]
})
export class DetailsComponent implements OnInit {
  person: Person | undefined = undefined;
  private activatedRoute = inject(ActivatedRoute);

  constructor(private personService: PersonService) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      const id = Number(params['id']);
      this.person = this.personService.getPersonById(id);
    });
  }
}
