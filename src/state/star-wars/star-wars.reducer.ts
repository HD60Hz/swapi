import { ActionReducer, Action } from '@ngrx/store';

import { State, intitialState, ActionWithPayload } from './star-wars.state';
import {
  GET_FILMS,
  GET_FILMS_FAILURE,
  GET_FILMS_SUCCESS, GetFilmsSuccessAction,

} from './star-wars.actions';


export function StarWarsReducer(state = intitialState, action: ActionWithPayload<State>): State {
  switch (action.type) {

    case GET_FILMS_SUCCESS: {
      return {
        ...state,
        films_content: action.payload.films_content,
        error: action.payload.error
      };
    };

    case GET_FILMS_FAILURE: {
      return {
        ...intitialState,
        error: action.payload.error
      };
    };

    default:
      return state;
  }
}
