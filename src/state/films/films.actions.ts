import { Action } from '@ngrx/store';
import { FilmState } from './films.state';

export const GET_FILMS = 'GET_FILMS_CONTENT';
export const GET_FILMS_SUCCESS = 'GET_FILMS_CONTENT_SUCCESS';
export const GET_FILMS_FAILURE = 'GET_FILMS_CONTENT_FAILURE';



export class GetFilmsAction implements Action {
  readonly type = GET_FILMS;
  // constructor(public payload: {loading}) {}
}

export class GetFilmsSuccessAction implements Action {
  readonly type = GET_FILMS_SUCCESS;
  constructor(public payload: {films_content: any; error?: {} }) {}
}

export class GetFilmsFailureAction implements Action {
  readonly type = GET_FILMS_FAILURE;
  constructor(public payload: {error?: {}, loading?: any}) {}
}

export type FilmsActions = GetFilmsAction | GetFilmsSuccessAction | GetFilmsFailureAction;
