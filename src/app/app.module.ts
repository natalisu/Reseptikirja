import { LikesService } from './services/likes.service';
import { RecipequeryService } from './services/recipequery.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import {APP_BASE_HREF} from '@angular/common';


import { AppComponent } from './app.component';
import { RecipeCardDetailedComponent } from './recipe-card-detailed/recipe-card-detailed.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { ImageCarouselComponent } from './image-carousel/image-carousel.component';
import { SimpleSearchComponent } from './simple-search/simple-search.component';

import { FrontPageComponent } from './front-page/front-page.component';
import { AdvancedSearchComponent } from './advanced-search/advanced-search.component';
import { SearchComponent } from './search/search.component';

import { CommentboxComponent } from './commentbox/commentbox.component';
import { MyRecipesComponent } from './my-recipes/my-recipes.component';
import { CardsContainerComponent } from './cards-container/cards-container.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { RoundingPipe } from './pipes/rounding.pipe';

const routeConfig = [
  {
    path: '',
    component: FrontPageComponent
  },
  {
    path: 'home',
    component: FrontPageComponent
  },
    {
    path: 'search/:query',
    component: SearchComponent
  },
  {
    path: 'search',
    component: SearchComponent
  },
   {
    path: 'favourites',
    component: FavouritesComponent
  },
   {
    path: 'recipe/:id',
    component: RecipeCardDetailedComponent
  }];

@NgModule({
  declarations: [
    AppComponent,
    RecipeCardDetailedComponent,
    NavigationBarComponent,
    ImageCarouselComponent,
    SimpleSearchComponent,
    FrontPageComponent,
    AdvancedSearchComponent,
    SearchComponent,
    CommentboxComponent,
    MyRecipesComponent,
    CardsContainerComponent,
    FavouritesComponent,
    RoundingPipe
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routeConfig)
  ],
  providers: [
    LikesService,
    RecipequeryService, {provide: APP_BASE_HREF, useValue : '' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
