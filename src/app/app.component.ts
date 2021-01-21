import { Component } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'project4';
  seq: number;

  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  setSequence(val: number) {
    console.log('Hello');
    if (val % 2 === 0) {
      this.evenNumbers.push(val);
    } else {
      this.oddNumbers.push(val);
    }
  }
}
