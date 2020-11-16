import { Injectable } from '@angular/core';
import { IProduct } from '../products/product';

@Injectable({
  providedIn: 'root'
})
export class BasketService {
  basketContentS: IProduct[] = [];

  constructor() { }

  increaseItemQty(item: IProduct): void{
    this.basketContentS.forEach(element => {
      if (element.productId === item.productId){
        element.qty ++;
      }
    });
  }

  decreaseItemQty(item: IProduct): void{
    this.basketContentS.forEach(element => {
      if (element.productId === item.productId){
        if (element.qty > 1){
          element.qty --;
        } else {
          this.removeItemFromBasket(item);
        }
      }
    });
  }

  addItemToBasket(item: IProduct): void{
    const index = this.basketContentS.indexOf(item);
    if (index !== -1) {
      this.increaseItemQty(item);
    } else {
      item.qty = 1;
      this.basketContentS.push(item);
    }
  }

  removeItemFromBasket(item: IProduct): void{
    const index = this.basketContentS.indexOf(item);
    if (index !== -1) {
      this.basketContentS.splice(index, 1);
    }
  }
}
