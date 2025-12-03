import {Component, Input} from '@angular/core';
import {RandomService} from '../random-service';
import {generate} from 'rxjs';
import {NgStyle} from '@angular/common';

@Component({
  selector: 'app-random',
  imports: [
    NgStyle
  ],
  templateUrl: './random.html',
  styleUrl: './random.scss',
})
export class Random {
  @Input() max = 100;
  value?: number;
  halfMax?: number;
  constructor(public randomService: RandomService) {
  }

  ngOnInit(): void {
    this.halfMax = this.max * 0.5;
  }
  generateRandom(): void {
    this.value = this.randomService.random(this.max);
  }

  protected readonly generate = generate;
}
