import { Food } from './app/shared/models/Food';
import { Tag } from './app/shared/models/Tag';

export const sample_foods: Food[] = [
  {
    id: '1',
    name: 'Pizza',
    price: 123,
    cookingTime: '40-50',
    favourite: false,
    origins: ['Italy'],
    stars: 4.0,
    imageUrl: 'assets/food-1.jpg',
    tags: ['FastFood', 'Lunch'],
  },
  {
    id: '2',
    name: 'Burger',
    price: 12,
    cookingTime: '40-50',
    favourite: true,
    origins: ['Italy', 'Germany'],
    stars: 5,
    imageUrl: 'assets/food-2.jpg',
    tags: ['FastFood', 'Burger'],
  },
  {
    id: '3',
    name: 'Biriyani',
    price: 15,
    cookingTime: '40-50',
    favourite: true,
    origins: ['India', 'Pakistan'],
    stars: 1,
    imageUrl: 'assets/food-3.jpg',
    tags: ['Lunch', 'Chicken', 'Dinner'],
  },
  {
    id: '4',
    name: 'Chicken Mandhi',
    price: 30,
    cookingTime: '40-50',
    favourite: false,
    origins: ['Qatar', 'UAE'],
    stars: 3,
    imageUrl: 'assets/food-4.jpg',
    tags: ['Lunch', 'Dinner', 'Chicken'],
  },
  {
    id: '5',
    name: 'Porotta',
    price: 15,
    cookingTime: '40-50',
    favourite: true,
    origins: ['India', 'kerala'],
    stars: 2,
    imageUrl: 'assets/food-5.jpg',
    tags: ['Dinner'],
  },
  {
    id: '6',
    name: 'Icecream',
    price: 15,
    cookingTime: '40-50',
    favourite: true,
    origins: ['India'],
    stars: 5,
    imageUrl: 'assets/food-6.jpg',
    tags: ['Desert'],
  },
];

export const sample_tags: Tag[] = [
  {
    name: 'Desert',
    count: 1,
  },
  {
    name: 'Dinner',
    count: 3,
  },
  {
    name: 'Lunch',
    count: 3,
  },
  {
    name: 'Chicken',
    count: 2,
  },
  {
    name: 'FastFood',
    count: 2,
  },
  {
    name: 'Burger',
    count: 1,
  },
];
