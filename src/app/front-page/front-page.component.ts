import { LikesService } from './../services/likes.service';
import { RecipequeryService } from './../services/recipequery.service';
import { Router, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { Subscription } from 'rxjs/Subscription';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.scss']
})
export class FrontPageComponent implements OnInit {

  private recommendedArray: Array<Params> = [
    {'cuisine': 'korean'},
    {'cuisine': 'japanese'},
    {'cuisine': 'french'},
    {'cuisine': 'italian'},
    {'cuisine': 'swedish'},
    {'cuisine': 'american'}
    ];

  private recParams: Params;
  private recommendRecipes: Array<Object> = [];
  private recTitle: string = "Recommended recipes";
  private horizontal: boolean = true;
  private imageurl: string = '';
  private foodFact: string = '';
  constructor(private router: Router, private recipeservice: RecipequeryService, private likes: LikesService) {

  }

  ngOnInit() {

    this.randomizeRec();

     this.recipeservice.getSearchResults(this.recParams)
        .subscribe(
          (res) => {
          //  this.recommendRecipes=  this.likes.isFavourite(res.results);
            this.recommendRecipes = res.results.slice(0, 4);
            this.imageurl = res.baseUri;
        });

        this.recipeservice.getFoodFact()
        .subscribe(res => this.foodFact = res.text);

  }

   saveUpdate(event) {
    console.log('save', event);
      this.recommendRecipes = this.likes.isFavourite(event);
  }

  randomizeRec(){
    let length = this.recommendedArray.length;
    let index = Math.floor((Math.random() * length) + 0.1);
    console.log(index);
    this.recParams = this.recommendedArray[index];
    console.log(this.recParams);
  }

}