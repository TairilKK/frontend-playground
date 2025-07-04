import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.html',
})
export class Welcome {
  @Output() playGame = new EventEmitter();
  welcome = 'Welcome to the Reflex Game!';
  slogan = 'Only the fastest survive.';
  description =
    'Tap as fast as you can when the screen turns red. Your reaction time will be measured — the faster, the better!';

  handleClick() {
    this.playGame.emit();
  }
}
