import { FavouritesComponent } from './../favourites/favourites.component';
import { Injectable } from '@angular/core';

@Injectable()
export class LikesService {


  constructor() { }

  saveToFavourites(recipe: Object){
  // save given recipe to favourites, construct new array if no previous favs have been set.
  // The recipe object has been constructed in parent component and only displays
  // info we want, which is same than what a common recipe search query would give.
        let likes: Array<Object>;
        if (localStorage.getItem('likes') === null) {
          likes = [];
        } else {
          likes = JSON.parse(localStorage.getItem('likes'));
        }

        // check if recipe already is saved
        if (!this.recipeExists(recipe, likes)) {
          likes.push(recipe);
          localStorage.setItem('likes', JSON.stringify(likes));
        }

  }

  isRecipeFavourite(recipeId: string) {
    //checks if given id of recipe is liked, return true or false
    let recipe: Object = {};
    recipe['id'] = parseInt(recipeId);
    console.log(recipe);
    let likes: Array<Object>;
    console.log(localStorage.getItem('likes'));
        if (localStorage.getItem('likes') === null) {
          console.log('no favs, so false');
          return false;
        } else {
          likes = JSON.parse(localStorage.getItem('likes'));
          console.log(likes);
          if (this.recipeExists(recipe, likes)) {
            console.log('recipe found, so true')
            return true;
          } else {
            console.log('recipe not found, can be added');
            return false;
          }
        }
  }

  getFavourites() {
    let likes;
    likes = JSON.parse(localStorage.getItem('likes'));
    return likes;
  }

  isFavourite(recipes: Array<Object>) {

    if (!recipes.length) {
    } else {
        // check if a recipe already exists in localStorage, using recipeExists() function
        let favs = JSON.parse(localStorage.getItem('likes'));
        if (favs) {
            for (let recipe of recipes) {
              if (this.recipeExists(recipe, favs)) {
                recipe['isliked'] = true;
              } else {
                recipe['isliked'] = false;
              }
            }
        }
    }
    return recipes;
  }

  recipeExists(obj, list) {
    // go through given list/array and check if given object's(obj) id matches any existing array object
      let i;
        for (i = 0; i < list.length; i++) {
          if (list[i].id === obj.id) {
            return true;
          }
        }
       return false;
    }

    removeFavourite(recipe: Object) {
      // remove favourite from localStorage list
      let favs = JSON.parse(localStorage.getItem('likes'));
      favs = this.removeByAttr(favs, 'id', recipe['id']);
      console.log(favs);
      localStorage.setItem('likes', JSON.stringify(favs));
      }

    removeByAttr (arr, attr, value) {
    // this has been copied straight from stackoverflow
    // go through given array, check if array item has given property
    // check if the property matches what was given as 'value'
    // if yes, splice the array on corresponsing index ,removing the array item
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
    // wipe them all!
      localStorage.removeItem('likes');
    }
}
