import { LikesService } from './../services/likes.service';
import { Params, Router, ActivatedRoute } from '@angular/router';
import { RecipequeryService } from './../services/recipequery.service';
import { Component, OnInit, OnDestroy, OnChanges } from '@angular/core';
import { Response } from '@angular/http';
import { Subscription } from 'rxjs/Subscription';

import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import {initFacebook, refreshFacebook} from '../../ownjs'

@Component({
  selector: 'app-recipe-card-detailed',
  templateUrl: './recipe-card-detailed.component.html',
  styleUrls: ['./recipe-card-detailed.component.scss']
})
export class RecipeCardDetailedComponent implements OnInit, OnChanges {
  private recipeInfo: any;
  private instructions: any;
  private ingredients: any;
  private activeId;
  private sub: Subscription ;
  private params;
  private similarRecipes: Array<Object> = [];
  private recipesTitle = "Similar recipes";
  private imageurl: string = 'https://spoonacular.com/recipeImages/';
  private url: string = '';

constructor(private recipequery: RecipequeryService, private router: Router, private route: ActivatedRoute, private likes: LikesService) { 

  }

  ngOnInit() {

      this.sub = this.route.params.subscribe(params => {
       this.activeId = params['id'];
      })

      if(this.activeId) {
        this.recipequery.getRecipeById(this.activeId)
          .subscribe(
            (res) => {
                this.recipeInfo = res;
                this.instructions = res.analyzedInstructions[0].steps;
                this.ingredients = res.extendedIngredients;
                window.scrollTo(0, 0);

                  this.url="http://users.metropolia.fi/recipe/" + this.activeId;

                  initFacebook();
                  refreshFacebook();

        this.recipequery.getSimilarRecipe(this.activeId)
        .subscribe(
          (res) => {
            this.similarRecipes =  res.slice(0, 4);
          //  this.similarRecipes = this.likes.isFavourite(this.similarRecipes);
            this.imageurl = "https://spoonacular.com/recipeImages/";

        })
      })
  }}

   ngOnChanges(activeId) {
    this.url="http://users.metropolia.fi/recipe/" + this.activeId;
  }


  saveToFavourites() {
    let recipe: Object = {};
    recipe['id']= this.activeId;
    recipe['title'] = this.recipeInfo.title;
    recipe['readyInMinutes'] = this.recipeInfo.readyInMinutes;

    let urlCheck = /[^\/]+$/g;
    let imageUrl = this.recipeInfo.image.match(urlCheck);
    console.log(imageUrl);
    recipe['image'] = imageUrl;
    this.likes.saveToFavourites(recipe);
  }

   saveUpdate(event) {
    console.log('save');
      this.similarRecipes = this.likes.isFavourite(event);
  }

  navigate(event) {

    /* try {
      document.getElementById('facebook-jssdk').remove();
      }catch(e){
      }*/

     this.recipequery.getRecipeById(event)
          .subscribe(
            (res) => {
                this.activeId= event;
                this.recipeInfo = res;
                this.instructions = res.analyzedInstructions[0].steps;
                this.ingredients = res.extendedIngredients;

                 this.url="http://users.metropolia.fi/recipe/" + this.activeId;
    
                initFacebook();
                refreshFacebook();

        this.recipequery.getSimilarRecipe(event)
        .subscribe(
          (res) => {
            this.similarRecipes =  res.slice(0, 3);
         //   this.similarRecipes = this.likes.isFavourite(this.similarRecipes);
            this.imageurl = "https://spoonacular.com/recipeImages/";

        })
      })
    window.scrollTo(0, 0);
    
  }

  convert() {
    this.ingredients = this.recipequery.convertUnits(this.ingredients, 'grams');
  }

}
