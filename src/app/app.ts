import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Random} from './random/random';
import {List} from './list/list';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Random, List],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('angular');
  public text:string = 'Hello World!';

}

