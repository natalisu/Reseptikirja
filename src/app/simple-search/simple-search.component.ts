import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-simple-search',
  templateUrl: './simple-search.component.html',
  styleUrls: ['./simple-search.component.scss']
})
export class SimpleSearchComponent implements OnInit {

  public searchForm = this.fb.group({
    searchterm: ['', Validators.required]
  });

  constructor(public fb: FormBuilder, private router: Router) { }

  search(event) {
    let searchterm = this.searchForm.value.searchterm;
    console.log(event);
    console.log(searchterm);
    event.preventDefault();
    this.router.navigate(['search-results', searchterm]);
  }

  ngOnInit() {
  }



}
