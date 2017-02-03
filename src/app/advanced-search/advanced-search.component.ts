import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-advanced-search',
  templateUrl: './advanced-search.component.html',
  styleUrls: ['./advanced-search.component.scss']
})
export class AdvancedSearchComponent implements OnInit {

  private intolerancesArray = [
    {value: 'dairy', checked: false },
    {value: 'egg', checked: false },
    {value: 'wheat', checked: false }
  ];

  public searchForm = this.fb.group({
    query: [''],
    excludeIngredients: [''],
    intolerances: []
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


   // console.log(query);
    event.preventDefault();
    this.router.navigate(['search', query]);
  }


  ngOnInit() {
  }

}
