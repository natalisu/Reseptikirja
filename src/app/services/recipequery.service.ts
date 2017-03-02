import { Params } from '@angular/router';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';


@Injectable()
export class RecipequeryService {

  constructor(private http:Http) { }

  getFoodJoke = () => {
    let headers = new Headers({ 'Accept': 'application/json', 'X-Mashape-Key': '4QehuLvcO0mshaMAE6nXERhX6id7p1lmS1rjsnVbsumPbznDZR' });
    let options = new RequestOptions({ headers: headers });

    let recipeUrl: string = 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/food/jokes/random';

    return this.http.get(recipeUrl, options).map(resp => resp.json());
     }

  getRecipeById = (id: number) => {
    let headers = new Headers({ 'Accept': 'application/json', 'X-Mashape-Key': '4QehuLvcO0mshaMAE6nXERhX6id7p1lmS1rjsnVbsumPbznDZR' });
    let options = new RequestOptions({ headers: headers });

    let recipeUrl = 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/'+id+'/information';

    return this.http.get(recipeUrl, options).map(resp => resp.json());
  }

  getSearchResults = (params: Params) => {
    let parameters = '?instructionsRequired=true&';
    for (let key in params){
      parameters = parameters + key.toString()+"="+params[key]+"&";
    };

    let headers = new Headers({ 'Accept': 'application/json', 'X-Mashape-Key': '4QehuLvcO0mshaMAE6nXERhX6id7p1lmS1rjsnVbsumPbznDZR' });
    let options = new RequestOptions({ headers: headers });

    console.log(parameters);

    let recipeUrl = 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/search' + parameters;

    return this.http.get(recipeUrl, options).map(resp => resp.json());
    }

 getSearchResultsOffSet = (params: Params, ten: string) => {
    let parameters = '?instructionsRequired=true&';
    for (let key in params){
      parameters = parameters + key.toString()+"="+params[key]+"&";
    };
    parameters = parameters + 'offset='+ten;

    let headers = new Headers({ 'Accept': 'application/json', 'X-Mashape-Key': '4QehuLvcO0mshaMAE6nXERhX6id7p1lmS1rjsnVbsumPbznDZR' });
    let options = new RequestOptions({ headers: headers });

    console.log(parameters);

    let recipeUrl = 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/search' + parameters;

    return this.http.get(recipeUrl, options).map(resp => resp.json());
    }

    getSimilarRecipe = (id: number) => {
      let headers = new Headers({ 'Accept': 'application/json', 'X-Mashape-Key': '4QehuLvcO0mshaMAE6nXERhX6id7p1lmS1rjsnVbsumPbznDZR' });
      let options = new RequestOptions({ headers: headers });

      let recipeUrl = 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/'+id+'/similar';

      return this.http.get(recipeUrl, options).map(resp => resp.json());
    }

    convertUnits(ingredients: Array<Object>, targetUnit: string) {
      let headers = new Headers({ 'Accept': 'application/json', 'X-Mashape-Key': '4QehuLvcO0mshaMAE6nXERhX6id7p1lmS1rjsnVbsumPbznDZR' });
      let options = new RequestOptions({ headers: headers });

      for (let ingredient of ingredients) {
          if (ingredient['unit'].indexOf('pound') >= 0 || ingredient['unit'].indexOf('oz') >= 0
          || ingredient['unit'].indexOf('ounce') >= 0 || ingredient['unit'].indexOf('lb') >= 0) {
            console.log(ingredient);
           let  name = ingredient['name'];
           let  amount = ingredient['amount'];
           let  unit = ingredient['unit'];
          let recipeUrl='https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/convert?ingredientName='+name+'&sourceAmount='+amount+'&sourceUnit='+unit+'&targetUnit='+targetUnit;
            this.http.get(recipeUrl, options).map(resp => resp.json()).subscribe(
          (resp) => {
              console.log(resp);
              ingredient['unit'] = resp.targetUnit;
              ingredient['amount'] = resp.targetAmount;
            });
          } else if (ingredient['unit'].indexOf('cup') >= 0 ) {
             ingredient['unit'] = 'dl';
            ingredient['amount'] = ingredient['amount']*2,365;
          }
    }

    return ingredients;


    }

    getFoodFact() {
      let headers = new Headers({ 'Accept': 'application/json', 'X-Mashape-Key': '4QehuLvcO0mshaMAE6nXERhX6id7p1lmS1rjsnVbsumPbznDZR' });
      let options = new RequestOptions({ headers: headers });

      let recipeUrl = 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/food/trivia/random';

      return this.http.get(recipeUrl, options).map(resp => resp.json());
    }


}