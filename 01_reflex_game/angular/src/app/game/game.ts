import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game',
  imports: [],
  templateUrl: './game.html',
})
export class Game implements OnInit {
  @Output() resultReady = new EventEmitter<number>();
  message = 'Click when the screen turns green!';
  reactionTime = 0;
  delay: number | null = null;
  interval: number | undefined = undefined;
  click = false;

  ngOnInit(): void {
    this.delay = Math.floor(Math.random() * 5000) + 2000; // Random delay between 2 and 6 seconds
    setTimeout(() => {
      this.message = 'Click now!';
      this.click = true;
      this.interval = setInterval(() => {
        this.reactionTime += 10;
      }, 10);
    }, this.delay);
  }

  getReactionTime() {
    clearInterval(this.interval);
    this.interval = undefined;
    this.resultReady.emit(this.reactionTime);
  }
}
