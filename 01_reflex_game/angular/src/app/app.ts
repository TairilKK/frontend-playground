import { Component } from '@angular/core';
import { Game } from './game/game';
import { Welcome } from './welcome/welcome';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  imports: [Welcome, Game],
})
export class App {
  endGame($event: number) {
    this.isPlaying = false;
    this.result =
      $event > 0
        ? `Your reaction time is: ${$event} ms`
        : 'Wait for the green box to appear!';
  }
  isPlaying = false;
  result: string | null = null;
  protected title = 'angular';

  startGame() {
    this.isPlaying = true;
  }
}
