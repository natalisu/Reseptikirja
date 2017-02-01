import { RecipequeryService } from './../services/recipequery.service';
import { Component, OnInit } from '@angular/core';
import { RequestOptions } from '@angular/http';
import { Router, ActivatedRoute, Params } from '@angular/router';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {

  constructor(private recipeservice: RecipequeryService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
     this.route.params
    .switchMap((params: Params) =>
    this.recipeservice.getRecipeById(841101))
        .subscribe(
          (res) => {
            console.log(res);
        });
  }

}
