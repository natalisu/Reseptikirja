import { RecipequeryService } from './../services/recipequery.service';
import { Component, OnInit } from '@angular/core';
import { RequestOptions, Response } from '@angular/http';
import { Router, ActivatedRoute, Params } from '@angular/router';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {

  private recipes;
  private imageurl;

  constructor(private recipeservice: RecipequeryService, private router: Router, private route: ActivatedRoute) { }

  recipeInfo(id: number){
    console.log(id);
    this.router.navigate(['recipe', id]);
  }

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
