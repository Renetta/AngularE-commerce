import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Input() searchItem = ''; //data rom parent component (search component)
  @Output() sendSearchFoodTerm = new EventEmitter<string>(); //send data to parent component(search Component)
  searchTerm: string = '';
  itemsinCart: number = 0;
  constructor(private activatedRoute: ActivatedRoute, private cartService: CartService) {
    activatedRoute.params.subscribe((params) => {
      if (params['searchTerm']) this.searchTerm = params['searchTerm'];
    });

    this.cartService.getCartItems().subscribe(items => {
      this.itemsinCart = items.items.length;
    })
  }

  ngOnInit(): void {}
  searchFood(searchTerm: string) {
    if (searchTerm) this.sendSearchFoodTerm.emit(searchTerm);
  }
}
