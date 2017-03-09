import { CommentboxComponent } from './../commentbox/commentbox.component';
import { LikesService } from './../services/likes.service';
import { RecipequeryService } from './../services/recipequery.service';
import { Router, Params } from '@angular/router';
import { Component, OnInit, OnChanges, OnDestroy } from '@angular/core';
import { Response } from '@angular/http';
import { Subscription } from 'rxjs/Subscription';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.scss']
})
export class FrontPageComponent implements OnInit, OnDestroy {

// define parameter for the recommended recipe CommentboxComponent
// one of the parameters will be picked randomly
  private recommendedArray: Array<Params> = [
    {'cuisine': 'japanese'},
    {'cuisine': 'french'},
    {'cuisine': 'italian'},
    {'query': 'cake'},
    {'query': 'cupcakes'}
    ];

  private recParams: Params;
  private recommendRecipes: Array<Object>;
  private ownRecipes: Array<Object>;
  private recTitle: string = "Recommended recipes";
  private ownTitle: string = "Your saved recipes";
  private horizontal: boolean = true;
  private imageurl: string = '';
  private foodFact: string = '';
  private sub: any;
  constructor(private router: Router, private recipeservice: RecipequeryService, private likes: LikesService) {

  }

  ngOnInit() {

    this.randomizeRec();
    console.log(this.recParams);

    this.sub = this.recipeservice.getSearchResults(this.recParams)
        .subscribe(
          (res) => {
            this.recommendRecipes = res.results.slice(0, 4);
            this.imageurl = res.baseUri;
            console.log(res.results);
        });

        this.ownRecipes = this.likes.getFavourites();
          if (this.ownRecipes) {
            this.ownRecipes = this.ownRecipes.slice(0, 4);
            this.ownRecipes = this.likes.isFavourite(this.ownRecipes);
            console.log(this.ownRecipes);
          }

        this.recipeservice.getFoodFact()
        .subscribe(res => this.foodFact = res.text);

  }

   saveUpdate(event) {
       this.recommendRecipes = this.likes.isFavourite(event);
  }

  saveFavourites(event) {
      this.ownRecipes = this.likes.isFavourite(event);
  }

  randomizeRec(){
    let length = this.recommendedArray.length;
    let index = Math.floor((Math.random() * length) + 0.1);
    this.recParams = this.recommendedArray[index];
  }

  ngOnDestroy(){
     this.sub.unsubscribe(); 
    }
}