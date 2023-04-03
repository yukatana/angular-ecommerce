import { createAction, props } from '@ngrx/store';
import { User } from '../../models/user';

export const saveSession = createAction(
  '[Authentication] Save session',
  props<{ user: User }>()
)

export const exitSession = createAction(
  '[Authentication] Exit session'
)
