import { RecipequeryService } from './../services/recipequery.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-advanced-search',
  templateUrl: './advanced-search.component.html',
  styleUrls: ['./advanced-search.component.scss']
})
export class AdvancedSearchComponent implements OnInit {

  private chosenType: string = '';
  checkTypes(){
      this.chosenType = this.searchQuery['type'];
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

    console.log();
    let iArray = [];

     this.intolerancesArray
        .filter(opt => opt.checked)
        .map(opt => opt.value)
        .map(function(opt){
          iArray.push(opt)
        });

    console.log(iArray);


    this.searchQuery['intolerances'] = iArray;
    if ( this.searchQuery['type']) {
      this.searchQuery['type'] = this.searchQuery['type'].replace(/ /,"+");
    }

    // console.log(query);
    event.preventDefault();
    this.router.navigate(['search', this.searchQuery]);

   // console.log(query);
    event.preventDefault();
    this.router.navigate(['search', this.searchQuery]);
  }


  ngOnInit() {
  }

}
