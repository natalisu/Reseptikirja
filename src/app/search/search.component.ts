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
    // Perform a new search with fresh parameters
    this.defaultResults = 0;
    this.parameters = event;

     this.recipeservice.getSearchResults(event)
        .subscribe(
          (res) => {
         this.recipes = res.results;
         this.imageurl = res.baseUri;
        });
  }


  ngOnInit() {

 // if using front page search, grab parameters from url
  this.route.params.subscribe(params => {
       this.parameters = params;
    });

    this.recipeservice.getSearchResults(this.parameters)
        .subscribe(
          (res) => {
         this.recipes = res.results;
          this.imageurl = res.baseUri;
        });
  }


  saveUpdate(event) {
      this.recipes = this.likes.isFavourite(event);
  }

  nextPrevious(ten: number) {
    // grab next ten results. API only gives ten results at a time so in template the offset number is set to 10.
    // add new results to recipes array and add 10 to defaultResults variable, so we get correct offset when querying even more results

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
