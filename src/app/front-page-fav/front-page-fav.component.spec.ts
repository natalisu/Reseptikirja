/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FrontPageFavComponent } from './front-page-fav.component';

describe('FrontPageFavComponent', () => {
  let component: FrontPageFavComponent;
  let fixture: ComponentFixture<FrontPageFavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrontPageFavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontPageFavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
