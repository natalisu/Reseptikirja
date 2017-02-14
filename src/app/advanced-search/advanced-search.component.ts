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
      this.chosenType = this.searchForm['type'];
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


  public searchForm = this.fb.group({
    query: [''],
    excludeIngredients: [''],
    intolerances: [],
    type: [''],
    diet: ['']
  });


  constructor(public fb: FormBuilder, private router: Router) { }

  search(event) {

    let iArray = [];

     this.intolerancesArray
        .filter(opt => opt.checked)
        .map(opt => opt.value)
        .map(function(opt){
          iArray.push(opt)
        });

    console.log(iArray);

    let query = this.searchForm.value;

    query.intolerances = iArray;
    query.type = query.type.replace(/ /,"+");


   // console.log(query);
    event.preventDefault();
    this.router.navigate(['search', query]);
  }


  ngOnInit() {
  }

}
