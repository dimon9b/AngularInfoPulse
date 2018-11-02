import {Component} from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent {

  public inputValue = '';

  public numbers: Array<number> = [];

  public symbols: Array<string> = [];

  public button: Array<string> = ['1', '2', '3', '+', '4', '5', '6', '-', '7', '8', '9', '*', 'C', '0', '=', '/'];

  constructor() {
  }

  public addInInput(item) {
    switch (item) {
      case 'C':
        this.inputValue = '';
        break;
      case '=':
        this.inputValue = this.calculateResult();
        break;
      default:
        this.inputValue += item;
        break;
    }
  }

  private calculateResult(): string {
    this.numbers = this.inputValue.split(/[+=\-\*\/]/).map(num => parseInt(num, 10));
    this.symbols = this.inputValue.split(/[0-9]/).filter(symbol => symbol !== ''); // иначе почему то разбивается с пробелами

    this.calculateByPriority('*', '/');
    this.calculateByPriority('+', '-');

    return this.numbers.toString();
  }

  private calculateByPriority(symbol1: string, symbol2: string) {
    let count = 0;
    let currentSymbol = this.symbols[count];

    while (count < this.symbols.length) {
      if (currentSymbol === symbol1 || currentSymbol === symbol2) {
        this.symbols.splice(count, 1);
        this.numbers[count] = this.countThis(count, currentSymbol);
        this.numbers.splice(count + 1, 1);
        currentSymbol = this.symbols[count];
      } else {
        currentSymbol = this.symbols[++count];
      }
    }
  }

  private countThis(index: number, buttonValue: string) {
    const leftNumber: number = this.numbers[index];
    const rightNumber: number = this.numbers[index + 1];

    switch (buttonValue) {
      case '*':
        return leftNumber * rightNumber;
      case '/':
        return leftNumber / rightNumber;
      case '+':
        return leftNumber + rightNumber;
      case '-':
        return leftNumber - rightNumber;
      default:
        return 0;
    }
  }

  // еще необходимы скобочки, точка, возведение в степень
}
