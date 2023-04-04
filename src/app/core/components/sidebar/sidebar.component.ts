import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../state/app.state';
import { Router } from '@angular/router';
import { isAuthenticatedSelector } from '../../../state/session/session.selectors';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../../../auth/services/authentication.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  isAuthenticated$: Observable<boolean>

  constructor(
    private router: Router,
    private store: Store<AppState>,
    private authService: AuthenticationService,
  ) {
    this.isAuthenticated$ = this.store.select(isAuthenticatedSelector)
  }

  ngOnInit(): void {
  }

  logOut = () => {
    this.authService.exitSession()
    this.router.navigate(['products'])
  }
}
