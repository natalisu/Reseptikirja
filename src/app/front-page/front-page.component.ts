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

  private recParams: Params = {'cuisine': 'nordic'};
  private recommendRecipes: Array<Object> = [];
  private recTitle: string = "Recommended recipes";
  private horizontal: boolean = true;

  constructor(private router: Router, private recipeservice: RecipequeryService) {

  }

  ngOnInit() {



     this.recipeservice.getSearchResults(this.recParams)
        .subscribe(
          (res) => {
            this.recommendRecipes = res.results.slice(0, 4);
            
            console.log(res);
        });
  }

}
