import { createReducer, on } from '@ngrx/store';
import { SessionState } from '../../models/session.state';
import { exitSession, saveSession } from './session.actions';

const initialState: SessionState = JSON.parse(
  // getting a previously saved session from localStorage, or providing a stringified initial state object to the parser since it can't handle null values
  localStorage.getItem('session') ||
  JSON.stringify({
    user: null,
    isAuthenticated: false,
  })
)

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
