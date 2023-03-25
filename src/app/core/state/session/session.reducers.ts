import { createReducer, on } from '@ngrx/store';
import { SessionState } from '../../../models/session.state';
import { exitSession, saveSession } from './session.actions';

const initialState: SessionState = {
  username: null,
  isAuthenticated: false,
  token: null,
}

export const sessionReducer = createReducer(
  initialState,
  on(saveSession, (state, { credentials }) => {
    return {
      isAuthenticated: true,
      username: credentials.username,
      token: credentials.token,
    }
  }),
  on(exitSession, () => {
    return {
      isAuthenticated: false,
      username: null,
      token: null,
    }
  })
)
