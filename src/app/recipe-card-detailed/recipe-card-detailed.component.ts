import { Params, Router, ActivatedRoute } from '@angular/router';
import { RecipequeryService } from './../services/recipequery.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Response } from '@angular/http';
import { Subscription } from 'rxjs/Subscription';

import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-recipe-card-detailed',
  templateUrl: './recipe-card-detailed.component.html',
  styleUrls: ['./recipe-card-detailed.component.scss']
})
export class RecipeCardDetailedComponent implements OnInit {
  private recipeInfo: any;
  private instructions: any;
  private ingredients: any;
  private activeId;
  private sub: Subscription ;
  private params;
  private similarRecipes: Array<Object> = [];


  constructor(private recipequery: RecipequeryService, private router: Router, private route: ActivatedRoute) { 

  }

  ngOnInit() {


      this.sub = this.route.params.subscribe(params => {
       this.activeId = params['id'];
       console.log(this.activeId);
      })

      if(this.activeId) {
        this.recipequery.getRecipeById(this.activeId)
          .subscribe(
            (res) => {
                this.recipeInfo = res;
                this.instructions = res.analyzedInstructions[0].steps;
                this.ingredients = res.extendedIngredients;
                console.log(res);
                console.log(this.activeId);

        this.recipequery.getSimilarRecipe(this.activeId)
        .subscribe(
          (res) => {
            console.log(res);
            this.similarRecipes =  res.slice(0, 3);
        })
      })
  }
  }
}
