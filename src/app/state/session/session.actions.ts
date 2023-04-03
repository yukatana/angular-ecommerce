import { createAction, props } from '@ngrx/store';
import { User } from '../../models/user';

export const saveSession = createAction(
  '[Authentication] Save session',
  props<{ user: User }>()
)

export const storeSession = createAction(
  '[Session effect] Store session data in localStorage',
  props<{ user: User }>()
)

export const exitSession = createAction(
  '[Authentication] Exit session'
)

export const deleteSessionFromStore = createAction(
  '[Session effect] Delete session data from localStorage'
)
