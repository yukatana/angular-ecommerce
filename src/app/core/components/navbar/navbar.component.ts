import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../../state/app.state';
import { isAuthenticatedSelector, usernameSelector } from '../../../state/session/session.selectors';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isAuthenticated$: Observable<boolean>
  username$: Observable<string | undefined>

  constructor(
    private store: Store<AppState>
  ) {
    this.isAuthenticated$ = this.store.select(isAuthenticatedSelector)
    this.username$ = this.store.select(usernameSelector)
  }

  ngOnInit(): void {
  }

}
