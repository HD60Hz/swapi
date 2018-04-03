import { State, ActionWithPayload } from './star-wars.state';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';

import * as StarWarsActions from './star-wars.actions';

import { HttpClient } from '@angular/common/http';

@Injectable()
export class StarWarsEffects {

  constructor(
    private http: HttpClient,
    private actions$: Actions
  ) { }
  @Effect() getFilms$ = this.actions$
      .ofType(StarWarsActions.GET_FILMS)
      .map(action => (action as any).payload)
      .mergeMap(payload => this.http.get('https://still-eyrie-36200.herokuapp.com/https://cors-anywhere.herokuapp.com/https://swapi.co/api/films'))
      .map((data) =>  {
         console.log(data);
         return new StarWarsActions.GetFilmsSuccessAction({films_content : data});
        });
  // .switchMap(payload => this.http.get('https://still-eyrie-36200.herokuapp.com/https://cors-anywhere.herokuapp.com/https://swapi.co/api/films'))
      // .subscribe(data => {
      //  console.log(data);
      //  return new StarWarsActions.GetFilmsSuccessAction({films_content : data});
      // },
      // err => {
      // return new StarWarsActions.GetFilmsFailureAction({error: {} });
      // });

  @Effect() getFilms2$ = this.actions$
    .ofType()
}
