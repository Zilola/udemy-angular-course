import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css'],
})
export class GameControlComponent implements OnInit {
  @Output() numEmitter = new EventEmitter<number>();
  inter;
  originNumber = 0;
  constructor() {}
  onClickButton() {
    console.log('hello I am working');

    this.inter = setInterval(() => {
      this.numEmitter.emit(this.originNumber + 1);
      this.incrementNum();
    }, 1000);
  }
  onStopButton() {
    console.log('I am about to stop');
    if (this.originNumber > 0) {
      clearInterval(this.inter);
    }
  }
  incrementNum() {
    this.originNumber++;
    console.log('Hello');
  }
  ngOnInit() {}
}
