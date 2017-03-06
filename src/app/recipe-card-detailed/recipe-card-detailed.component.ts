import { FavouritesComponent } from './../favourites/favourites.component';
import { LikesService } from './../services/likes.service';
import { Params, Router, ActivatedRoute } from '@angular/router';
import { RecipequeryService } from './../services/recipequery.service';
import { Component, OnInit, OnDestroy, OnChanges } from '@angular/core';
import { Response } from '@angular/http';
import { Subscription } from 'rxjs/Subscription';

import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import {initFacebook, refreshFacebook} from '../../ownjs';

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
  private recipesTitle = "Similar recipes";
  private imageurl: string = 'https://spoonacular.com/recipeImages/';
  private url: string = '';
  private imageurlFb;

constructor(private recipequery: RecipequeryService, private router: Router, private route: ActivatedRoute, private likes: LikesService) { 

  }

  ngOnInit() {

      // grab recipe id from url parameters
      this.sub = this.route.params.subscribe(params => {
       this.activeId = params['id'];
      });

      if (this.activeId) {

        // get recipe info and list of similar recipes based on active id
        this.recipequery.getRecipeById(this.activeId)
          .subscribe(
            (res) => {
                this.recipeInfo = res;
                this.instructions = res.analyzedInstructions[0].steps;
                this.ingredients = res.extendedIngredients;
                this.imageurlFb = this.imageurl + this.recipeInfo.image;
                window.scrollTo(0, 0);

                this.url = "http://212.24.98.139/#/recipe/" + this.activeId;

                initFacebook();
                refreshFacebook();

        this.recipequery.getSimilarRecipe(this.activeId)
        .subscribe(
          (res) => {
            this.similarRecipes =  res.slice(0, 4);
        })
      })
  }}


  saveToFavourites() {
    //save current active recipe to favourites after constructing an object with required information

    let recipe: Object = {};
    recipe['id']= this.activeId;
    recipe['title'] = this.recipeInfo.title;
    recipe['readyInMinutes'] = this.recipeInfo.readyInMinutes;

    // for some reason with compelete recipe query the API returns full url to image when in other
    // cases just image file name is returned, so we need to extract that as our container component only needs file name
    let urlCheck = /[^\/]+$/g;
    let imageUrl = this.recipeInfo.image.match(urlCheck);

    recipe['image'] = imageUrl;
    this.likes.saveToFavourites(recipe);
  }

   saveUpdate(event) {
     // save recipe to favourites
      this.similarRecipes = this.likes.isFavourite(event);
  }

  navigate(event) {
    // we need to assign new recipe's info to local variables as no router actions are taken when navigating to "same page"

     this.recipequery.getRecipeById(event)
          .subscribe(
            (res) => {
                this.activeId = event;
                this.recipeInfo = res;
                this.instructions = res.analyzedInstructions[0].steps;
                this.ingredients = res.extendedIngredients;

                 this.url = "http://212.24.98.139/#/recipe/" + this.activeId;

                initFacebook();
                refreshFacebook();

        this.recipequery.getSimilarRecipe(event)
        .subscribe(
          (res) => {
            this.similarRecipes =  res.slice(0, 4);
        });
      });
    window.scrollTo(0, 0);

  }

  convert() {
    this.ingredients = this.recipequery.convertUnits(this.ingredients, 'grams');
  }

}
