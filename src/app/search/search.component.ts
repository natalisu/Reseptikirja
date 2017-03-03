import { MyRecipesComponent } from './../my-recipes/my-recipes.component';
import { Response } from '@angular/http';
import { LikesService } from './../services/likes.service';
import { RecipequeryService } from './../services/recipequery.service';

import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Router, Params, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  private recipes: Array<Object>= [];
  private imageurl: string;
  private parameters: Params;
  private defaultResults: number = 0;


  constructor( private route: ActivatedRoute, private recipeservice: RecipequeryService, private likes: LikesService) { }

  searchNew(event) {
    this.defaultResults = 0;
    this.parameters = event;

     this.recipeservice.getSearchResults(event)
        .subscribe(
          (res) => {
         this.recipes = res.results;

            this.imageurl = res.baseUri;
            console.log(res);
        });
  }


  ngOnInit() {

  this.route.params.subscribe(params => {
       this.parameters = params;
       console.log(this.parameters);
    });

    this.recipeservice.getSearchResults(this.parameters)
        .subscribe(
          (res) => {
         this.recipes = res.results;

            this.imageurl = res.baseUri;
            console.log(res);
        });
  }


  saveUpdate(event) {
    console.log('save');
      this.recipes = this.likes.isFavourite(event);
  }

  nextPrevious(ten: number) {
    this.defaultResults = this.defaultResults + ten;

    this.recipeservice.getSearchResultsOffSet(this.parameters, this.defaultResults.toString())
    .subscribe(
          (res) => {

          for (let recipe of res.results) {
            this.recipes.push(recipe);
          }

          this.recipes = this.likes.isFavourite(this.recipes);
         console.log(res);
        });
  }


}
