import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Input() searchItem = ''; //data rom parent component (search component)
  @Output() sendSearchFoodTerm = new EventEmitter<string>(); //send data to parent component(search Component)
  searchTerm: string = '';
  constructor(private activatedRoute: ActivatedRoute) {
    activatedRoute.params.subscribe((params) => {
      if (params['searchTerm']) this.searchTerm = params['searchTerm'];
    });
  }

  ngOnInit(): void {}
  searchFood(searchTerm: string) {
    if (searchTerm) this.sendSearchFoodTerm.emit(searchTerm);
  }
}
