import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from 'src/app/services/products.service';
import { CardDTO } from "../../models/card.model";


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  form: FormGroup;

  get addressField() {
    return this.form.get('address');
  }
  get scoreField() {
    return this.form.get('score');
  }
  get priceField() {
    return this.form.get('price');
  }
  get typeField() {
    return this.form.get('type');
  }
  get amenitiesField() {
    return this.form.get('amenities');
  }
  get descriptionField() {
    return this.form.get('description');
  }

  get imageField() {
    return this.form.get('description');
  }

  get isFieldValid() {
    return this.addressField?.touched && this.addressField.valid
  }

  get isFieldInvalid() {
    return this.addressField?.touched && this.addressField.invalid
  }


  constructor( private productService: ProductsService, private formBuilder: FormBuilder ) {
    this.buildForm();
  }

  ngOnInit(): void {
    /* this.form.valueChanges.subscribe(val => {
      console.log(val);
    }) */
  }

  private buildForm () {
    this.form = this.formBuilder.group({
      address : ['', Validators.required],
      score : ['', Validators.required],
      price : ['', Validators.required],
      type : ['null', Validators.required],
      amenities : ['', Validators.required],
      description : ['', Validators.required],
      image : ['']
    })
  }

  createNewCard(data: CardDTO) {
    this.productService.createEvent(data);
    this.form.reset();
  }

  save(event: any) {
    if (this.form.valid) {
      this.createNewCard(this.form.value)
    } else {
      this.form.markAllAsTouched();
    }
  }

}
