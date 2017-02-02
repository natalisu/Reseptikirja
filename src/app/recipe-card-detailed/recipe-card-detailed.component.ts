import { Params, Router, ActivatedRoute } from '@angular/router';
import { RecipequeryService } from './../services/recipequery.service';
import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-recipe-card-detailed',
  templateUrl: './recipe-card-detailed.component.html',
  styleUrls: ['./recipe-card-detailed.component.scss']
})
export class RecipeCardDetailedComponent implements OnInit {
  private recipeInfo: any;
  private instructions: any;
  private ingredients: any;


  constructor(private recipequery: RecipequeryService, private router: Router, private route: ActivatedRoute) { 

  }

  ngOnInit() {

    this.route.params
    .switchMap((params: Params) =>
      this.recipequery.getRecipeById(params['id']))
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
