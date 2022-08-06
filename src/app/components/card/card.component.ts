import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Card } from "../../models/card.model";
import { CardsComponent } from '../cards/cards.component';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {


  @Input() item : Card = {
    id: '',
    address : '',
    amenities: '',
    score: 0,
    price: 0,
    type: '',
    image: '',
    description: ''
  }

  @Output() deleteItem = new EventEmitter<string>();

  constructor( private productService: ProductsService ) { }

  ngOnInit(): void {
  }

  onDeleteCard() {
    this.deleteItem.emit(this.item.id);
  }

}
