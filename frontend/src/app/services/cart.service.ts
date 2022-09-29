import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Cart } from '../shared/models/Cart';
import { CartItem } from '../shared/models/CartItem';
import { Food } from '../shared/models/Food';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor() {}
  private cart: Cart = this.getCartFromLocalStorage();
  private cartSubject: BehaviorSubject<Cart> = new BehaviorSubject(this.cart);

  addItemToCart(foodItem: Food): void {
    let ItemIsInCart = this.cart.items.find(
      (items) => items.food.id == foodItem.id
    );
    if (ItemIsInCart) return;

    this.cart.items.push(new CartItem(foodItem));
    this.setCartToLocalStorage();
  }

  getCartItems(): Observable<Cart> {
    return this.cartSubject.asObservable();
  }

  changeQuantity(foodId: string, quantity: number) {
    let selectedItem = this.cart.items.find((item) => item.food.id == foodId);
    if (!selectedItem) return;

    selectedItem.quantity = quantity;
    selectedItem.price = selectedItem.quantity * selectedItem.food.price;
    this.setCartToLocalStorage();
  }

  removeItemFromCart(foodItem: CartItem) {
    this.cart.items = this.cart.items.filter(
      (item) => item.food.id !== foodItem.food.id
    );
    this.setCartToLocalStorage();
  }

  private setCartToLocalStorage(): void {
    let cartJson = JSON.stringify(this.cart);
    localStorage.setItem('Cart', cartJson);
    this.cartSubject.next(this.cart);
  }

  private getCartFromLocalStorage(): Cart {
    const cartJson = localStorage.getItem('Cart');
    return cartJson ? JSON.parse(cartJson) : new Cart();
  }
}
