import { RecipequeryService } from './../services/recipequery.service';
import { Router } from '@angular/router';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-advanced-search',
  templateUrl: './advanced-search.component.html',
  styleUrls: ['./advanced-search.component.scss']
})
export class AdvancedSearchComponent implements OnInit {

  private chosenType: string;
  @Output() searchAdvanced: EventEmitter<Object> = new EventEmitter<Object>();

  checkTypes() {
      this.chosenType = this.searchQuery['type'];
  }

  removeType() {
    this.searchQuery['type'] = '';
  }

   private dietArray = [
     'vegan',
     'vegetarian'
   ];

  private intolerancesArray = [
    {value: 'dairy', checked: false },
    {value: 'gluten', checked: false },
    {value: 'egg', checked: false },
    {value: 'peanut', checked: false },
    {value: 'soy', checked: false },
    {value: 'seafood', checked: false },
    {value: 'shellfish', checked: false },
    {value: 'sulfite', checked: false },
    {value: 'tree nut', checked: false },
    {value: 'wheat', checked: false }
  ];

  private typesArray = [
    'main course',
    'side dish',
    'dessert',
    'appetizer',
    'salad',
    'bread',
    'breakfast',
    'soup',
    'beverage',
    'sauce',
    'drink'
  ];

  private searchQuery: Object = {};

  constructor(public fb: FormBuilder, private router: Router) { }

  search() {

    // Check which intolerances have been checked and add those to the search array

    let iArray = [];

     this.intolerancesArray
        .filter(opt => opt.checked)
        .map(opt => opt.value)
        .map(function(opt){
          iArray.push(opt)
        });

    this.searchQuery['intolerances'] = iArray;

    // add '+' to types of food that have multiple words in their name

    if ( this.searchQuery['type']) {
      this.searchQuery['type'] = this.searchQuery['type'].replace(/ /,"+");
    }

    event.preventDefault();
    this.searchAdvanced.emit(this.searchQuery);
  }

  ngOnInit() {
  }

}
