import { LikesService } from './../services/likes.service';
import { RecipequeryService } from './../services/recipequery.service';

import { Component, OnInit, Input } from '@angular/core';
import { Router, Params, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  private recipes: Array<Object>= [];
  private imageurl: string;

  constructor(private route: ActivatedRoute, private recipeservice: RecipequeryService, private likes: LikesService) { }

  ngOnInit() {
     this.route.params
    .switchMap((params: Params) =>
    this.recipeservice.getSearchResults(params))
        .subscribe(
          (res) => {
          //  this.recipes = this.likes.isFavourite(res.results);
          this.recipes = res.results;
            this.imageurl = res.baseUri;
            console.log(res);
        });
  }

  saveUpdate(event) {
    console.log('save');
      this.recipes = this.likes.isFavourite(event);
  }

}
