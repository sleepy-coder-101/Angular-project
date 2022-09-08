import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'my-first-app';
  count = 0;

  listOfNumbers = [1, 32, 32, 55];
  listOfCars = ['Audi', 'BMW', 'Chevrolet', 'Dodge', 'Ford', 'GMC'];

  decreaseCount = () => {
    console.log('Button clicked');
    this.count--;
  };

  increaseCount = () => {
    console.log('Button clicked');
    this.count++;
  };
}
