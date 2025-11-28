import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-list',
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './list.html',
  styleUrl: './list.scss',
})
export class List {
  val: string = '';
  items: string[] = [];

  addItem(): void {
    this.items.push(this.val);
    this.val = '';
  }

  removeItem(index: number): void {
    this.items.splice(index, 1);
  }
}
