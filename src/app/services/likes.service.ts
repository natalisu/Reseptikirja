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

  isFavourite(recipes: Array<Object>) {
    let favs = JSON.parse(localStorage.getItem('likes'));
    for (let recipe of recipes) {
      if (this.recipeExists(recipe, favs)) {
        recipe['isliked'] = true;
      } else {
        recipe['isliked'] = false;
      }
    } 
    return recipes;
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

    removeFavourite(recipe: Object) {
      let favs = JSON.parse(localStorage.getItem('likes'));
      favs = this.removeByAttr(favs, 'id', recipe['id']);
      console.log(favs);
      localStorage.setItem('likes', JSON.stringify(favs));
      }
    

    removeByAttr (arr, attr, value) {
    let i = arr.length;
    while (i--) {
       if ( arr[i]
           && arr[i].hasOwnProperty(attr) 
           && (arguments.length > 2 && arr[i][attr] === value ) ) {
           arr.splice(i, 1);
       }
    }
    return arr;
    }

    emptyFavourites() {
      localStorage.removeItem('likes');
    }
}
