import { RecipequeryService } from './../services/recipequery.service';

import { Component, OnInit } from '@angular/core';
import { Router, Params, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  private recipes: Array<Object>= [];
  private imageurl: string;

  constructor(private route: ActivatedRoute, private recipeservice: RecipequeryService) { }

  ngOnInit() {
     this.route.params
    .switchMap((params: Params) =>
    this.recipeservice.getSearchResults(params))
        .subscribe(
          (res) => {
            this.imageurl = res.baseUri;
            this.recipes = res.results;
            console.log(res);
        });
  }

}
