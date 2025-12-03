import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RandomService {
  public random(max: number) {
    return Math.floor(Math.random() * max);
  }
}
