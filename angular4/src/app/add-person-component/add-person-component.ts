import {Component, inject} from '@angular/core';
import {PersonService} from '../person-service';
import {Person} from '../person';
import {FormsModule} from '@angular/forms';
import {Router} from '@angular/router';
import {MatFormField, MatInput, MatLabel} from '@angular/material/input';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-add-person-component',
  imports: [
    FormsModule,
    MatFormField,
    MatLabel,
    MatInput,
    MatButton
  ],
  templateUrl: './add-person-component.html',
  styleUrl: './add-person-component.scss',
})
export class AddPersonComponent {
  person: Person = {firstName: '', familyName: '', age: undefined, address: {city: '', street: '', postCode: ''}};
  constructor(private personService: PersonService, private router: Router) {
  }

  async handleSubmit() {
    if (
      !this.person.firstName ||
      !this.person.familyName ||
      !this.person.age ||
      !this.person.address.city ||
      !this.person.address.street ||
      !this.person.address.postCode
    ) {
      alert('Fill all the fields');
      return;
    }
    this.personService.addPerson(this.person);

    const success = await this.router.navigate(['/']);
    if (!success) {
      alert('Something went wrong');
    }
  }
}


