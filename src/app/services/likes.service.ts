import { Injectable } from '@angular/core';

@Injectable()
export class LikesService {


  constructor() { }

  saveToFavourites(recipe: Object){
        let likes: Array<Object>;
        if (localStorage.getItem('likes') === null) {
          likes = [];
        } else {
          likes = JSON.parse(localStorage.getItem('likes'));
        }

        if (!this.recipeExists(recipe, likes)) {
          likes.push(recipe);
          localStorage.setItem('likes', JSON.stringify(likes));
        }

  }

  getFavourites() {
    let likes;
    likes = JSON.parse(localStorage.getItem('likes'));
    return likes;
  }

  recipeExists(obj, list) {
      let i;
        for (i = 0; i < list.length; i++) {
          if (list[i].id === obj.id) {
            return true;
          }
        }
       return false;
    }

    emptyFavourites() {
      localStorage.removeItem('likes');
    }
}
