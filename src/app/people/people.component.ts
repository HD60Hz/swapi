import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { PeopleState  } from '../../state/people/people.state';
import * as FilmActions from '../../state/people/people.actions';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {

  people$: Observable<any>;
  categoryContent: any;
  people_content: any;
  constructor( private store: Store<PeopleState>) {
    this.people$ = this.store;
    this.people$.subscribe((data) => {
      console.log(data)
      this.people_content = data.people;
    });
    this.store.dispatch(
      new FilmActions.GetPeopleAction()
    );
  }

  ngOnInit() {
  }

}




