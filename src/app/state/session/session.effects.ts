import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthenticationService } from '../../auth/services/authentication.service';
import { deleteSessionFromStore, exitSession, saveSession, storeSession } from './session.actions';
import { map, tap } from 'rxjs';


@Injectable()
export class SessionEffects {

  constructor(
    private actions$: Actions,
    private authService: AuthenticationService,
  ) { }

  saveSession$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(storeSession),
      // using AuthenticationService to save session data to localStorage
      tap(action => {
        this.authService.saveSessionToStorage(action.user)
      }),
      // mapping to the saveSession action in order to update state
      map(action =>
        saveSession({ user: action.user})
      )
    )}
  )

  exitSession$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(deleteSessionFromStore),
      tap(action => {
        this.authService.deleteSessionFromStorage()
      }),
      map(action =>
        exitSession()
      )
    )
  })

}
