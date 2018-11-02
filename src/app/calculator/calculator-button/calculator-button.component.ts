import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-calculator-button',
  templateUrl: './calculator-button.component.html',
  styleUrls: ['./calculator-button.component.scss']
})
export class CalculatorButtonComponent implements OnInit {
  @Input()
  public btnItem: string;

  @Output()
  public btnClick = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }
}
