import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Cart } from 'src/app/shared/models/Cart';
import { CartItem } from 'src/app/shared/models/CartItem';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css'],
})
export class CartPageComponent implements OnInit {
  cart!: Cart;
  constructor(private cartService: CartService) {
    this.cartService.getCartItems().subscribe((items) => {
      this.cart = items;
    });
  }

  ngOnInit(): void {}

  selectingQuantity(items: CartItem, quantity: string) {
    this.cartService.changeQuantity(items.food.id, parseInt(quantity));
  }

  removeSelctedItem(items: CartItem) {
    this.cartService.removeItemFromCart(items);
  }
}
