import { RecipequeryService } from './services/recipequery.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RecipeCardDetailedComponent } from './recipe-card-detailed/recipe-card-detailed.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipeCardDetailedComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [RecipequeryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
