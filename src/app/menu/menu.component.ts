import { Component, OnInit } from '@angular/core';
import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {


  dishes: Dish[];

  selectedDish: Dish;

  onSelect(dish: Dish){
    this.selectedDish = dish;
  }

  constructor(private disshService: DishService) { }

  ngOnInit(): void {
    this.disshService.getDishes()
    .then((dishes)=>{this.dishes = dishes});
  }

}
