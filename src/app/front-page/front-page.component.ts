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

  private recParams: Params = {'cuisine': 'french'};
  private recommendRecipes: Array<Object> = [];
  private recTitle: string = "Recommended recipes";
  private horizontal: boolean = true;
  private imageurl: string = '';
  constructor(private router: Router, private recipeservice: RecipequeryService, private likes: LikesService) {

  }

  ngOnInit() {



     this.recipeservice.getSearchResults(this.recParams)
        .subscribe(
          (res) => {
          //  this.recommendRecipes=  this.likes.isFavourite(res.results);
            this.recommendRecipes = res.results.slice(0, 4);
            this.imageurl = res.baseUri;
        });
  }

   saveUpdate(event) {
    console.log('save', event);
      this.recommendRecipes = this.likes.isFavourite(event);
  }

}
