import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { Card, CardDTO, CardModel } from "../../models/card.model";



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
    amenities: '',
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

    productService.$emtterCreate.subscribe((data: CardDTO) => {
      this.createNewProduct(data);
    })
   }

  ngOnInit(): void {
    this.productService.getAllParkings()
    .subscribe(data => {
      this.items = data;
    })
  }

  createNewProduct(data: CardDTO) {

    let amenities = data.amenities;
    let arrAmenities = amenities.split(',')
    //"https://placeimg.com/640/480"
    const parking: CardModel = {
      address: data.address,
      amenities: arrAmenities,
      score: data.score,
      price: data.price,
      type: data.type,
      image: data.image,
      description: data.description
    }

    this.productService.create(parking)
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
