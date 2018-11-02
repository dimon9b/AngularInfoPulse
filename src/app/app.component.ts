import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public childHeaderText: string;
  public receivedData: string;

  public receiveData(data: string): void {
    this.receivedData = data;
  }
}
