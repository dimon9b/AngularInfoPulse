import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent {

  @Input() public someComponentText: string;
  @Output() public passDataToParent = new EventEmitter<string>();

  public enteredData: string;

  public passData() {
    this.passDataToParent.emit(this.enteredData);
  }

  constructor() { }

}
