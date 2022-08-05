import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { Card, CardDTO } from "../../models/card.model";



@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  items: Card[] = []
  showCardDetail = false;

  cardChosen: Card = {
    id: '',
    address : '',
    amenities: [],
    score: 0,
    price: 0,
    type: '',
    image: '',
    description: ''
  }

  constructor( private productService: ProductsService ) {
    /* productService.$emtterDelete.subscribe(() => {
      this.deleteCards();
    }) */

    productService.$emtterCreate.subscribe(() => {
      this.createNewProduct();
    })
   }

  ngOnInit(): void {
    this.productService.getAllParkings()
    .subscribe(data => {
      this.items = data;
    })
  }

  createNewProduct() {
    const estacionamiento: CardDTO = {
      address: "calle avenida 4",
      amenities: ["cajon techado","departamento", "planta baja"],
      score: 4,
      price: 2000,
      type: "publico",
      image: "https://placeimg.com/640/480",
      description: "Estacionamiento en avenida"
    }

    this.productService.create(estacionamiento)
    .subscribe(data => {
      this.items.unshift(data)
    })
  }

  deleteCards(idCard: string) {
    const id = idCard;
    this.productService.delete(id)
    .subscribe(() => {
      const productIndex = this.items.findIndex(item => item.id === this.cardChosen.id);
      this.items.splice(productIndex, 1);
      this.showCardDetail = false;

    });
  }

}
