import { Params } from '@angular/router';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';


@Injectable()
export class RecipequeryService {

  private foodUrl: string = 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/food/jokes/random';

  constructor(private http:Http) { }

  getFoodFact = () => {
    let headers = new Headers({ 'Accept': 'application/json', 'X-Mashape-Key': '4QehuLvcO0mshaMAE6nXERhX6id7p1lmS1rjsnVbsumPbznDZR' });
    let options = new RequestOptions({ headers: headers });

    return this.http.get(this.foodUrl, options).map(resp => resp.json());
     }

  getRecipeById = (id: number) => {
    let headers = new Headers({ 'Accept': 'application/json', 'X-Mashape-Key': '4QehuLvcO0mshaMAE6nXERhX6id7p1lmS1rjsnVbsumPbznDZR' });
    let options = new RequestOptions({ headers: headers });

    let recipeUrl = 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/'+id+'/information';

    return this.http.get(recipeUrl, options).map(resp => resp.json());
  }

  getSearchResults = (params: Params) => {
    let parameters = '?';
    for (let key in params){
      parameters = parameters + key.toString()+"="+params[key]+"&";
    };

    let headers = new Headers({ 'Accept': 'application/json', 'X-Mashape-Key': '4QehuLvcO0mshaMAE6nXERhX6id7p1lmS1rjsnVbsumPbznDZR' });
    let options = new RequestOptions({ headers: headers });

    console.log(parameters);

    let recipeUrl = 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/search' + parameters;

    return this.http.get(recipeUrl, options).map(resp => resp.json());
    }


}