import { ActionReducer, Action } from '@ngrx/store';
import * as fromFilms from './films.actions';
import { FilmState, initialState } from './films.state';



export function FilmsReducer(state = initialState, action: fromFilms.FilmsActions): FilmState {
  switch (action.type) {

    case fromFilms.GET_FILMS: {
      return {
        ...state,
        loading: true,
      };
    };

    case fromFilms.GET_FILMS_SUCCESS: {
      return {
        ...state,
        films_content: action.payload.films_content,
        error: action.payload.error,
        loading: false,
      };
    };

    case fromFilms.GET_FILMS_FAILURE: {
      return {
        ...initialState,
        error: action.payload.error,
        loading: false,
      };
    };

    default:
      return state;
  }
}
