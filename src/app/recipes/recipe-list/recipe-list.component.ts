import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  ricetta: Recipe = new Recipe(
    'Patate e cozze',
    'Lorem Ipsum',
    'http://loremflickr.com/240/320/food'
  );

  ricetta2: Recipe = new Recipe(
    'Pollo al curry',
    'Lorem Ipsum',
    'http://loremflickr.com/240/320/pollo'
  );

  ricetta3: Recipe = new Recipe(
    'Riso alle vongole',
    'Lorem Ipsum',
    'http://loremflickr.com/240/320/riso'
  );

  recipes: Recipe[] = [this.ricetta, this.ricetta2, this.ricetta3];







  constructor() { }

  ngOnInit() {
  }

}
