import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule} from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { FilmsComponent } from './films/films.component';
import { AppRoutingModule } from './app-routing.module';
import { NavComponent } from './nav/nav.component';

import  { StarWarsReducer } from '../state/star-wars/star-wars.reducer';
import { StarWarsEffects } from '../state/star-wars/star-wars.effects';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    FilmsComponent,
    NavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(({starWars: StarWarsReducer})),
    EffectsModule.forRoot([StarWarsEffects]),
    HttpModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
