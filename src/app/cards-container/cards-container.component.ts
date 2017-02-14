import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cards-container',
  templateUrl: './cards-container.component.html',
  styleUrls: ['./cards-container.component.scss']
})
export class CardsContainerComponent implements OnInit {

  @Input() recipes: Array<Object> = [];
  @Input() horizontal: boolean = true;

  constructor() { }

  ngOnInit() {
  }

}
