import { ActionReducerMap } from '@ngrx/store';
import { SessionState } from '../../models/session.state';
import { sessionReducer } from './session/session.reducers';

export interface AppState {
  session: SessionState
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  session: sessionReducer
}
