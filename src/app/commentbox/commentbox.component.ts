
import { Component, OnInit, Input, OnChanges } from '@angular/core';


@Component({
  selector: 'app-commentbox',
  templateUrl: './commentbox.component.html',
  styleUrls: ['./commentbox.component.scss']
})
export class CommentboxComponent implements OnInit, OnChanges {

  @Input() recipeURL: any;
  private url: string = 'http://212.24.98.139/#/recipe/';

  constructor() { }

  ngOnInit() {
    this.url = this.url + this.recipeURL;
  }

  ngOnChanges(recipeUrl) {
    this.url = this.url + this.recipeURL;
  }
}
