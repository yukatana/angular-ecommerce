import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../../models/user';
import { Store } from '@ngrx/store';
import { AppState } from '../../../state/app.state';
import { userSelector } from '../../../state/session/session.selectors';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  user$: Observable<User | null>

  constructor(
    private store: Store<AppState>
  ) {
    this.user$ = this.store.select(userSelector)
  }

  ngOnInit(): void {
  }

}
