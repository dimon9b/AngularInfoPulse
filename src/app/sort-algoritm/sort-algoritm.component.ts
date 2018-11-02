import {Component, ElementRef, OnInit} from '@angular/core';
import {createInput} from '@angular/compiler/src/core';

@Component({
  selector: 'app-sort-algoritm',
  templateUrl: './sort-algoritm.component.html',
  styleUrls: ['./sort-algoritm.component.scss']
})
export class SortAlgoritmComponent {

  public arrayOfNumber: Array<number> = [];
  public arrayOfNumberOutput: string;
  public sortedArray: string;
  public inputValue: string;

  constructor() { }

  public addInArray() {
    this.arrayOfNumber.push(+this.inputValue);
    this.inputValue = '';
    this.arrayOfNumberOutput = this.arrayOfNumber.join(', ');
  }

  public sort(arrayOfNumber) {
    let tmp;
    for (let i = this.arrayOfNumber.length - 1; i > 0; i--) {
      let counter = 0;
      for (let j = 0; j < i; j++) {
        if (this.arrayOfNumber[j] > this.arrayOfNumber[j + 1]) {
          tmp = this.arrayOfNumber[j];
          this.arrayOfNumber[j] = this.arrayOfNumber[j + 1];
          this.arrayOfNumber[j + 1] = tmp;
          counter++;
        }
      }
      if (counter === 0) {
        break;
      }
    }
    this.sortedArray = this.arrayOfNumber.join(', ');
    this.arrayOfNumberOutput = '';
    return arrayOfNumber;
  }

  public clear() {
    this.arrayOfNumberOutput = '';
    this.arrayOfNumber = [];
    this.sortedArray = '';
  }

}


