import { Injectable } from '@angular/core';
import { HttpService } from '../../core/services/http.service';
import { User, UserCredentials } from '../../models/user';
import { Store } from '@ngrx/store';
import { AppState } from '../../state/app.state';
import { SessionState } from '../../models/session.state';
import { sessionSelector } from '../../state/session/session.selectors';
import { exitSession, storeSession } from '../../state/session/session.actions';
import { Observable } from 'rxjs';
import { HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  response!: User;
  session$: Observable<SessionState>;

  constructor(
    private httpService: HttpService,
    private store: Store<AppState>,
  ) {
    this.session$ = this.store.select(sessionSelector)
  }

  attemptSignup(user: User): Observable<HttpResponse<User>> {
    return this.httpService.postSignup(user)
  }

  attemptLogin(credentials: UserCredentials): Observable<HttpResponse<User>> {
    return this.httpService.postLogin(credentials)
  }

  createSession(user: User) {
    this.store.dispatch(storeSession({ user }))
  }

  // called from SessionEffects in order to persist session data
  saveSessionToStorage(user: User) {
    localStorage.setItem('session', JSON.stringify(user))
  }

  exitSession() {
    this.store.dispatch(exitSession())
  }

  // called from SessionEffects in order to delete session data
  deleteSessionFromStorage() {
    localStorage.removeItem('session')
  }
}
