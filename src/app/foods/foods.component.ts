import { Component } from '@angular/core';
import { FoodService } from '../food.service';

@Component({
  selector: 'foods',
  templateUrl: './foods.component.html',
  styleUrls: ['./foods.component.css']
})
export class FoodsComponent {
  foods;
  constructor(foodService: FoodService) {
    this.foods = foodService.getProducts();
  }

}
