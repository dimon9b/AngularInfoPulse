import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-calculator-button',
  templateUrl: './calculator-button.component.html',
  styleUrls: ['./calculator-button.component.css']
})
export class CalculatorButtonComponent implements OnInit {

  // @Input() inputValue: string;
  //
  // @Input() numbers: Array<number> = [];
  //
  // @Input() symbols: Array<string> = [];

  // public inputValue = '';
  //
  // public numbers: Array<number> = [];
  //
  // public symbols: Array<string> = [];

  public button: Array<string> = ['1', '2', '3', '+', '4', '5', '6', '-', '7', '8', '9', '*', 'C', '0', '=', '/'];

  constructor() { }

  ngOnInit() {
  }

  // public addInInput(item) {
  //   switch (item) {
  //     case 'C':
  //       this.inputValue = '';
  //       break;
  //     case '=':
  //       this.numbers = this.inputValue.split(/[+=\-\*\/]/).map(num => parseInt(num, 10));
  //       this.symbols = this.inputValue.split(/[0-9]/).filter(symbol => symbol !== ''); // иначе почему то разбивается с пробелами
  //       let indexMultiply = this.symbols.indexOf('*');
  //       while (indexMultiply >= 0) {
  //         const resultMultiply = this.numbers[indexMultiply] * this.numbers[indexMultiply + 1];
  //         this.symbols.splice(indexMultiply, 1);
  //         this.numbers[indexMultiply] = resultMultiply;
  //         this.numbers.splice(indexMultiply + 1, 1);
  //         indexMultiply = this.symbols.indexOf('*');
  //       }
  //       let indexDivision = this.symbols.indexOf('/');
  //       while (indexDivision >= 0) {
  //         const resultDivision = this.numbers[indexDivision] / this.numbers[indexDivision + 1];
  //         this.symbols.splice(indexDivision, 1);
  //         this.numbers[indexDivision] = resultDivision;
  //         this.numbers.splice(indexDivision + 1, 1);
  //         indexDivision = this.symbols.indexOf('/');
  //       }
  //       while (this.symbols.length > 0) {
  //         const firstSym = this.symbols[0];
  //         let resultAdd;
  //         if (firstSym === '+') {
  //           resultAdd = this.numbers[0] + this.numbers[1];
  //         } else {
  //           resultAdd = this.numbers[0] - this.numbers[1];
  //         }
  //         this.symbols.splice(0, 1);
  //         this.numbers[0] = resultAdd;
  //         this.numbers.splice(1, 1);
  //       }
  //       this.inputValue = this.numbers.toString();
  //       break;
  //     default:
  //       this.inputValue += item;
  //       break;
  //   }
  // }


}
