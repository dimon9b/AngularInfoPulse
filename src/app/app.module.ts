import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputMaskModule } from 'primeng/inputmask';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AppRoutingModule } from './app.routing';
import { UserModule } from "./user/user.module";

import { AppComponent } from './app.component';
import { SortAlgoritmComponent } from './sort-algoritm/sort-algoritm.component';
import { YellowTitleComponent } from './yellow-title/yellow-title.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { CalculatorButtonComponent } from './calculator/calculator-button/calculator-button.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { ChildStylesComponent } from './child-styles/child-styles.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { OrderDataComponent } from './components/order-data/order-data.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    SortAlgoritmComponent,
    YellowTitleComponent,
    CalculatorComponent,
    CalculatorButtonComponent,
    DataBindingComponent,
    ChildStylesComponent,
    RegistrationFormComponent,
    AboutComponent,
    HomeComponent,
    OrderDataComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    InputMaskModule,
    ToggleButtonModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    UserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
