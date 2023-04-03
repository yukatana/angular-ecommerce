import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../state/app.state';
import { exitSession } from '../../../state/session/session.actions';
import { Router } from '@angular/router';
import { isAuthenticatedSelector } from '../../../state/session/session.selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  isAuthenticated$: Observable<boolean>

  constructor(
    private router: Router,
    private store: Store<AppState>,
  ) {
    this.isAuthenticated$ = this.store.select(isAuthenticatedSelector)
  }

  ngOnInit(): void {
  }

  logOut = () => {
    this.router.navigate(['products'])
    this.store.dispatch(exitSession())
  }
}
