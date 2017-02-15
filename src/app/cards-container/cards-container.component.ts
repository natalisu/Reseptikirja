import { LikesService } from './../services/likes.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cards-container',
  templateUrl: './cards-container.component.html',
  styleUrls: ['./cards-container.component.scss']
})
export class CardsContainerComponent implements OnInit {

  @Input() recipes: Array<Object> = [];
  @Input() horizontal: boolean = true;
  @Input() title: string = '';
  @Input() imageurl: string = '';

  constructor(private likes: LikesService) { }

  ngOnInit() {

  }

  saveToFavourites(event) {
    let recipe: Object = {};
    recipe['id']= event.id;
    recipe['title'] = event.title;
    recipe['readyInMinutes'] = event.readyInMinutes;
    this.likes.saveToFavourites(recipe);
  }

}
