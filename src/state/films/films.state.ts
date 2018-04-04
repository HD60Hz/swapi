import { Action } from '@ngrx/store';

export interface FilmState {
  films_content?: any;
  error?: any;
  loading?: boolean;
}

export const initialState: FilmState = {
  films_content: [],
  loading: false,
};

