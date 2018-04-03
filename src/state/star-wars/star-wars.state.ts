import { Action} from '@ngrx/store';

export interface Films {
  fields: {
    title: string;
    episode_id: string;
    opening_crawl: string;
    director: string;
    release_date: string;
  };
  loading: boolean;
  error: boolean;
}

export interface State {
  films_content?: any;
  error?: any;
  loading?: boolean;
}

export const intitialState: State = {
  films_content: [],
}

export interface ActionWithPayload<T> extends Action {
  payload: T;
}
