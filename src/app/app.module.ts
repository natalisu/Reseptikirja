import { RecipequeryService } from './services/recipequery.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { RecipeCardDetailedComponent } from './recipe-card-detailed/recipe-card-detailed.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { ImageCarouselComponent } from './image-carousel/image-carousel.component';
import { SimpleSearchComponent } from './simple-search/simple-search.component';
import { SearchResultsComponent } from './search-results/search-results.component';

const routeConfig = [
  {
    path: 'search-results/:searchterm',
    component: SearchResultsComponent
}];

@NgModule({
  declarations: [
    AppComponent,
    RecipeCardDetailedComponent,
    NavigationBarComponent,
    ImageCarouselComponent,
    SimpleSearchComponent,
    SearchResultsComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routeConfig)
  ],
  providers: [RecipequeryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
