import { LikesService } from './../services/likes.service';
import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss']
})
export class FavouritesComponent implements OnInit {

  @Input() ownRecipes: Array<Object> = [];
  private title: string = '';
  private showButton: boolean = false;
  private imageurl ="https://spoonacular.com/recipeImages/";
  private sub: any;
  private recipesFound: boolean = false;

  constructor(private likes: LikesService) { }

  ngOnInit() {
  this.ownRecipes = this.likes.getFavourites();
    if (this.ownRecipes) {
      this.ownRecipes = this.likes.isFavourite(this.ownRecipes);
      console.log(this.ownRecipes);
      if (this.ownRecipes === null || this.ownRecipes.length == 0) {
        this.title = "No saved recipes found";
      } else {
        this.recipesFound = true;
        this.title = "Saved recipes";
        this.showButton = true;
      }
     }
  }


   saveUpdate(event) {
     if(this.ownRecipes){
      this.ownRecipes = this.likes.getFavourites();
       if (this.ownRecipes === null || this.ownRecipes.length === 0) {
          this.recipesFound = false;
          console.log(this.recipesFound);
      } else {
        this.ownRecipes = this.likes.isFavourite(this.ownRecipes);
      }
     }
  }

  emptyFavourites() {
    this.likes.emptyFavourites();
    this.ownRecipes = this.likes.getFavourites();
    this.recipesFound = false;
  }
}
