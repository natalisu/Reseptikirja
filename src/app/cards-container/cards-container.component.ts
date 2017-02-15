import { LikesService } from './../services/likes.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

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

  @Output() update: EventEmitter<Array<Object>> = new EventEmitter<Array<Object>>();

  constructor(private likes: LikesService) { }

  ngOnInit() {
  }

  saveToFavourites(event) {
    console.log('added to favs:', event.id);
    let recipe: Object = {};
    recipe['id']= event.id;
    recipe['title'] = event.title;
    recipe['readyInMinutes'] = event.readyInMinutes;
    this.likes.saveToFavourites(recipe);
    console.log(this.recipes);
    this.update.emit(this.recipes);
  }

  removeFromFavourites(event) {
    this.likes.removeFavourite(event);
    console.log('removed from favs:', event.id);
    this.update.emit(this.recipes);
  }

}
