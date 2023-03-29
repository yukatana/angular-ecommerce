import { Injectable } from '@angular/core';
import { HttpService } from '../../core/services/http.service';
import { User } from '../../models/user';
import { Store } from '@ngrx/store';
import { AppState } from '../../core/state/app.state';
import { SessionState } from '../../models/session.state';
import { sessionSelector } from '../../core/state/session/session.selectors';
import { saveSession } from '../../core/state/session/session.actions';

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

  attemptSignup(user: User) {
    return this.httpService.postSignup(user)
  }

  createSession(user: User) {
    this.store.dispatch(saveSession({ user }))
  }
}
