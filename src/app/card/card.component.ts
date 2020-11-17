import { NodeWithI18n } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ICard } from './card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  // TO BE REMOVED
  cards: ICard[] = [
    {
      cardHolder: 'ION',
      cardNumber: 150,
      expirationDate: '2010-21-10',
      imageUrl: 'assets/images/visa.png',
      cardTitle: 'Visa'
    },
    {
      cardHolder: 'DOREL',
      cardNumber: 180,
      expirationDate: '2010-21-16',
      imageUrl: 'assets/images/revolut.png',
      cardTitle: 'Revolut'
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

  onFinishPaymentClicked(): void {
    // Communication with server

    // Need to send selected card and basket.

    // Perform two checks on selected card:
    // One for expiration - LOCAL, one for avaliability - SERVER
  }

}
