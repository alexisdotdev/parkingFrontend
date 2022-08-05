import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  /* form: FormGroup; */

  nameField = new FormControl();

  constructor( private productService: ProductsService, private formBuilder: FormBuilder ) {
    this.formBuilder
  }

  ngOnInit(): void {
  }

  /* get addressField() {
    return this.form.get()
  } */

  createNewCard() {
    this.productService.createEvent();
  }

  /* save() {
    this.createNewCard();
  } */

}
