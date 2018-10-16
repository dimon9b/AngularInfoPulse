import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-calculator-button',
  templateUrl: './calculator-button.component.html',
  styleUrls: ['./calculator-button.component.css']
})
export class CalculatorButtonComponent implements OnInit {
  @Input()
  btnItem: string;

  @Output()
  btnClick = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }
}
