import { createSelector } from '@ngrx/store';
import { SessionState } from '../../../models/session.state';
import { AppState } from '../app.state';

export const sessionSelector = (state: AppState): SessionState => {
  return state.session
}

export const usernameSelector = createSelector(
  sessionSelector,
  (state: SessionState) => {
    return state.username
  }
)

export const tokenSelector = createSelector(
  sessionSelector,
  (state: SessionState) => {
    return state.token
  }
)
