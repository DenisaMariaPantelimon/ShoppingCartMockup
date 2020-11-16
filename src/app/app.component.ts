import { Component, OnInit } from '@angular/core';
import { IProduct } from './products/product';

@Component({
  selector: 'app-root',
  template: `
    <nav class='navbar navbar-expand navbar-light bg-light'>
      <a class='navbar-brand'>{{pageTitle}}</a>
      <ul class='nav nav-pills'>
        <li><a class='nav-link' routerLinkActive='active' [routerLink]="['/home']">Home</a></li>
        <li><a class='nav-link' routerLinkActive='active' [routerLink]="['/products']">Product List</a></li>
      </ul>
    </nav>
    <div class='container'>
      <router-outlet></router-outlet>
    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  pageTitle = 'Shopping Cart MockUp';

  constructor() {
  }
  ngOnInit(): void {
  }
}
