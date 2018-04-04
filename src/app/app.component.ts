import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { State } from '../state/star-wars/star-wars.state';
import * as StarWarsActions from '../state/star-wars/star-wars.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'THE STAR WARS API APP';

  constructor(
  ) {
  }

}
