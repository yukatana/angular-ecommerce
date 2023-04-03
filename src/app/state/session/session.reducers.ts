import { createReducer, on } from '@ngrx/store';
import { SessionState } from '../../models/session.state';
import { exitSession, saveSession } from './session.actions';

const initialState: SessionState = {
  user: null,
  isAuthenticated: false,
}

export const sessionReducer = createReducer(
  initialState,
  on(saveSession, (state, { user }) => {
    return {
      user,
      isAuthenticated: true,
    }
  }),
  on(exitSession, () => {
    return {
      user: null,
      isAuthenticated: false,
    }
  })
)
