import { Injectable } from '@angular/core';
import { HttpService } from '../../core/services/http.service';
import { User, UserCredentials } from '../../models/user';
import { Store } from '@ngrx/store';
import { AppState } from '../../core/state/app.state';
import { SessionState } from '../../models/session.state';
import { sessionSelector } from '../../core/state/session/session.selectors';
import { saveSession } from '../../core/state/session/session.actions';
import { Observable } from 'rxjs';
import { HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  response!: User;
  session!: SessionState;

  constructor(
    private httpService: HttpService,
    private store: Store<AppState>,
  ) {
    this.store.select(sessionSelector).subscribe(
      state => this.session = state
    )
  }

  attemptSignup(user: User): Observable<HttpResponse<User>> {
    return this.httpService.postSignup(user)
  }

  attemptLogin(credentials: UserCredentials): Observable<HttpResponse<User>> {
    return this.httpService.postLogin(credentials)
  }

  createSession(user: User) {
    this.store.dispatch(saveSession({ user }))
  }
}
