import { createAction, props } from '@ngrx/store';
import { SessionCredentials } from '../../../models/session-credentials';

export const saveSession = createAction(
  '[Authentication] Save session',
  props<{ credentials: SessionCredentials }>()
)

export const exitSession = createAction(
  '[Authentication] Exit session'
)
