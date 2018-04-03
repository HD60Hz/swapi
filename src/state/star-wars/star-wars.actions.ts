import { Action } from '@ngrx/store';
import { ActionWithPayload } from './star-wars.state';
import { State } from './star-wars.state';

export const GET_FILMS = 'GET_FILMS_CONTENT';
export const GET_FILMS_SUCCESS = 'GET_FILMS_CONTENT_SUCCESS';
export const GET_FILMS_FAILURE = 'GET_FILMS_CONTENT_FAILURE';

export class GetFilmsSuccessAction2 implements Action {
  readonly type = GET_FILMS_SUCCESS;
  constructor(public payload: {films_content: any; error?: {} }) {}
}

export class GetFilmsAction implements ActionWithPayload<State> {
  readonly type = GET_FILMS;
  constructor(public payload: {}) {}
}

export class GetFilmsSuccessAction implements ActionWithPayload<State> {
  readonly type = GET_FILMS_SUCCESS;
  constructor(public payload: {films_content: any; error?: {} }) {}
}

export class GetFilmsFailureAction implements ActionWithPayload<State> {
  readonly type = GET_FILMS_FAILURE;
  constructor(public payload: {error?: {}}) {}
}

export type All = GetFilmsAction | GetFilmsSuccessAction | GetFilmsFailureAction;
