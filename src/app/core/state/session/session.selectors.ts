import { createSelector } from '@ngrx/store';
import { SessionState } from '../../../models/session.state';
import { AppState } from '../app.state';

export const sessionSelector = (state: AppState): SessionState => {
  return state.session
}

export const isAuthenticatedSelector = createSelector(
  sessionSelector,
  (state: SessionState) => {
    return state.isAuthenticated
  }
)

export const usernameSelector = createSelector(
  sessionSelector,
  (state: SessionState) => {
    return state?.user?.username
  }
)
