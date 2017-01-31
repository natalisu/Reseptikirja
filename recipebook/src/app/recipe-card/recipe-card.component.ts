import { RecipequeryService } from './../services/recipequery.service';
import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.css']
})
export class RecipeCardComponent implements OnInit {

  private recipeInfo: any;
  private instructions: any;
  private ingredients: any;

  constructor(private recipequery: RecipequeryService) { }

  ngOnInit() {

     this.recipequery.getRecipeById(841101)
      .subscribe(
        (res) => {
        this.recipeInfo = res;
        this.instructions = res.analyzedInstructions[0].steps;
        this.ingredients = res.extendedIngredients;
        console.log(res);

        }
      );
  }

}
