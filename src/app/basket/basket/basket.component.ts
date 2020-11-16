import { Component, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct, Product } from 'src/app/products/product';
import { BasketService } from '../basket.service';


@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit, OnChanges {
  basketContent: IProduct[];

  constructor(private basket: BasketService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.basketContent = this.basket.basketContentS; // Initialize basket list
  }

  ngOnChanges(): void{
    this.basketContent = this.basket.basketContentS;
  }

  onPaymentClicked(): void{
    this.router.navigate(['/payment']);
  }

  getBasketTotal(): string {
    let basketTotal = 0;

    if (this.basketContent.length > 0) {
      this.basketContent.forEach(element =>
        basketTotal += element.qty * (element.price + element.tax));
    }

    return this.formatToCurrency(basketTotal);
  }

  formatToCurrency(amount): string{
    return '$' + amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
  }

}
