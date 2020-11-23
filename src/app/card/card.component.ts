import { NodeWithI18n } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ICard } from './card';
import { CardService } from './card.service';
import { BasketService } from '../basket/basket.service';
// import { IProduct } from './product';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  cards: ICard[] = [];
  errorMessage = '';

  constructor(public cardService: CardService,
              public basketService:BasketService) { 
  }

  ngOnInit(): void {
    this.cardService.getCards().subscribe({
      next: cards => this.cards = cards,
      error: err => this.errorMessage = err
    });
  }

  // Send data to server
  onFinishPaymentClicked(): void {
    // this.cardService.sendOrder(this.basketService.basketContentS);
    alert('Order placed!');
  }

}
