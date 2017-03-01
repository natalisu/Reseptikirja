
import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-commentbox',
  templateUrl: './commentbox.component.html',
  styleUrls: ['./commentbox.component.scss']
})
export class CommentboxComponent implements OnInit {

  @Input() recipeURL: any;
  private url: string = '';

  constructor() { }

  ngOnInit() {
    this.url="http://users.metropolia.fi/recipe/" + this.recipeURL;
  }
}
