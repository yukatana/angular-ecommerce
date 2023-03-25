import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AppState } from '../state/app.state';
import { Store } from '@ngrx/store';
import { isAuthenticatedSelector } from '../state/session/session.selectors';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanLoad {
  authenticationStatus$!: Observable<boolean>;
  isAuthenticated!: boolean;

  constructor(
    private store: Store<AppState>
  ) {}

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    this.authenticationStatus$ = this.store.select(isAuthenticatedSelector)
    this.authenticationStatus$.subscribe(
      isAuthenticated => this.isAuthenticated = isAuthenticated
    )
    return this.isAuthenticated
  }
}
