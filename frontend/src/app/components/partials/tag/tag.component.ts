import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from 'src/app/services/food.service';
import { Tag } from 'src/app/shared/models/Tag';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.css'],
})
export class TagComponent implements OnInit {
  tags: Tag[] = [];
  activeButton: string = '';
  constructor(
    private foodService: FoodService,
    activatedRoute: ActivatedRoute
  ) {
    this.tags = foodService.getAllTag();
    activatedRoute.params.subscribe((params) => {
      if (params['tagName'])  {
        this.activeButton = params['tagName'];
      }
    });
  }

  ngOnInit(): void {}

  isActive(selectedTag: any) {
    return this.activeButton === selectedTag;
  }
}
