import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SortAlgoritmComponent } from './sort-algoritm/sort-algoritm.component';
import { FormsModule } from '@angular/forms';
import { YellowTitleComponent } from './yellow-title/yellow-title.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { CalculatorButtonComponent } from './calculator/calculator-button/calculator-button.component';

@NgModule({
  declarations: [
    AppComponent,
    SortAlgoritmComponent,
    YellowTitleComponent,
    CalculatorComponent,
    CalculatorButtonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
