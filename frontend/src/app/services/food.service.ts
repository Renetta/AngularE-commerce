import { Injectable } from '@angular/core';
import { sample_foods, sample_tags } from 'src/data';
import { Food } from '../shared/models/Food';
import { Tag } from '../shared/models/Tag';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  constructor() {}

  getAll(): Food[] {
    return sample_foods;
  }

  getAllItemsBySearch(searchName: string) {
    return this.getAll().filter((food) =>
      food.name.toLowerCase().includes(searchName.toLowerCase())
    );
  }

  getAllTag(): Tag[] {
    return sample_tags;
  }

  getAllItemsByTag(tagName: string) {
    return tagName == 'All'
      ? this.getAll()
      : this.getAll().filter((food) => food.tags?.includes(tagName));
  }
}
