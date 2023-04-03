import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  NavigationExtras,
  Router,
  RouterStateSnapshot,
  UrlTree
} from '@angular/router';
import { Observable } from 'rxjs';
import { AppState } from '../../state/app.state';
import { Store } from '@ngrx/store';
import { isAuthenticatedSelector } from '../../state/session/session.selectors';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
  authenticationStatus$!: Observable<boolean>;
  isAuthenticated!: boolean;

  constructor(
    private router: Router,
    private store: Store<AppState>,
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    this.authenticationStatus$ = this.store.select(isAuthenticatedSelector)
    this.authenticationStatus$.subscribe(
      isAuthenticated => this.isAuthenticated = isAuthenticated
    )
    if (this.isAuthenticated) {
      return true
    } else {
      const currentUrl = this.router.url
      const navigationExtras: NavigationExtras = {
        queryParams: { returnUrl: currentUrl}
      }
      this.router.navigate(['/auth/login'], navigationExtras)
      return false
    }
  }


}
