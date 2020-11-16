import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BasketService } from '../basket/basket.service';

import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  imageWidth = 55;
  imageMargin = 2;

  errorMessage = '';
  products: IProduct[] = [];
  basketItems: IProduct[] = [];

// inject products from service
  constructor(private productService: ProductService,
              private route: ActivatedRoute,
              private router: Router,
              private basketService: BasketService) {
  }

  ngOnInit(): void {
    this.productService.getProducts().subscribe({
      next: products => this.products = products,
      error: err => this.errorMessage = err
    });
  }

  // Go to basket
   onViewBasketClicked(): void{
    this.router.navigate(['/basket']);
  }

  onAddToBasketClicked(item: IProduct): void {
    // Add item to basket if it is not already
    this.basketService.addItemToBasket(item);
  }

}
