
import { Component, OnInit, Input, OnChanges } from '@angular/core';


@Component({
  selector: 'app-commentbox',
  templateUrl: './commentbox.component.html',
  styleUrls: ['./commentbox.component.scss']
})
export class CommentboxComponent implements OnInit, OnChanges {

  @Input() recipeURL: any;
  private url: string = '';

  constructor() { }

  ngOnInit() {
    this.url="http://users.metropolia.fi/recipe/" + this.recipeURL;
  }

  ngOnChanges(recipeUrl) {
    this.url="http://users.metropolia.fi/recipe/" + this.recipeURL;
  }
}
