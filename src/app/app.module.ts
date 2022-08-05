import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { FormComponent } from './components/form/form.component';
import { FilterComponent } from './components/filter/filter.component';
import { ModalDeleteComponent } from './components/modal-delete/modal-delete.component';
import { ModalAddComponent } from './components/modal-add/modal-add.component';
import { CardsComponent } from './components/cards/cards.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    FormComponent,
    FilterComponent,
    ModalDeleteComponent,
    ModalAddComponent,
    CardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
