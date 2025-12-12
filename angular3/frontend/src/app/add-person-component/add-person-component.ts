import {Component, inject} from '@angular/core';
import {PersonService} from '../person-service';
import {Person} from '../person';
import {FormsModule} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-person-component',
  imports: [
    FormsModule
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

     const success = await this.personService.addPerson(this.person);
      if (success) {
        await this.router.navigate(['/']);
      } else {
        alert('Failed to add person. Please try again.');
      }
  }
}


