import {ChangeDetectorRef, Component, inject, OnInit} from '@angular/core';
import {PersonService} from '../person-service';
import {Person} from '../person';
import {RouterLink} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-list-component',
  imports: [
    RouterLink
  ],
  templateUrl: './list-component.html',
  styleUrl: './list-component.scss',
})
export class ListComponent implements OnInit{
  private subscription?: Subscription;
  public personService = inject(PersonService);
  persons: Person[] = [];
  private cdRef = inject(ChangeDetectorRef);
  async ngOnInit(): Promise<void> {
    this.personService.getPersons().subscribe(persons => {
      this.persons = persons;
      this.cdRef.detectChanges();
    });
    this.subscription = this.personService.personsChanged.subscribe(() => {
      this.personService.getPersons().subscribe(persons => {
        this.persons = persons;
      });
    });
  }

  removePerson(id: number) {
    this.personService.removePersonById(id).subscribe(() => {
      this.personService.getPersons().subscribe(persons => {
        this.persons = persons;
        this.cdRef.detectChanges();
      });
    });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
