import { RecipequeryService } from './../services/recipequery.service';
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
  @Output() navigateTo: EventEmitter<number> = new EventEmitter<number>();

  constructor(private likes: LikesService) { }

  ngOnInit() {
  }

  saveToFavourites(event) {
    console.log('added to favs:', event);
    let recipe: Object = {};
    recipe['id']= event.id;
    recipe['title'] = event.title;
    recipe['readyInMinutes'] = event.readyInMinutes;
    recipe['image'] = event.image;
    this.likes.saveToFavourites(recipe);
    this.update.emit(this.recipes);
  }

  removeFromFavourites(event) {
    this.likes.removeFavourite(event);
    this.update.emit(this.recipes);
  }

  navigate(id: number) {
    this.navigateTo.emit(id);
  }

}
