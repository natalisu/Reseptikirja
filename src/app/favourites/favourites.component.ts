import { LikesService } from './../services/likes.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss']
})
export class FavouritesComponent implements OnInit {

  @Input() ownRecipes: Array<Object> = [];
  private title: string = '';
  private showButton: boolean = false;

  constructor(private likes: LikesService) { }

  ngOnInit() {
    this.ownRecipes = this.likes.getFavourites();
    if (this.ownRecipes === null) {
      this.title = "No saved recipes found";
    } else {
      this.title = "Saved recipes";
      this.showButton = true;
    }
  }

  emptyFavourites() {
    this.likes.emptyFavourites();
    this.ownRecipes = this.likes.getFavourites();
  }
}
