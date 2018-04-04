import { Action } from '@ngrx/store';
import { PeopleState } from './people.state';

export const GET_PEOPLE = 'GET_PEOPLE_CONTENT';
export const GET_PEOPLE_SUCCESS = 'GET_PEOPLE_CONTENT_SUCCESS';
export const GET_PEOPLE_FAILURE = 'GET_PEOPLE_CONTENT_FAILURE';



export class GetPeopleAction implements Action {
  readonly type = GET_PEOPLE;
  // constructor(public payload: {loading}) {}
}

export class GetPeopleSuccessAction implements Action {
  readonly type = GET_PEOPLE_SUCCESS;
  constructor(public payload: {people_content: any; error?: {} }) {}
}

export class GetPeopleFailureAction implements Action {
  readonly type = GET_PEOPLE_FAILURE;
  constructor(public payload: {error?: {}, loading?: any}) {}
}

export type PeopleActions = GetPeopleAction | GetPeopleSuccessAction | GetPeopleFailureAction;
