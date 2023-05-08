import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../../../services/authentication.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup
  returnUrl!: string

  constructor(
    private authService: AuthenticationService,
    private route: ActivatedRoute,
    private router: Router,
  ) {
    const emailRegex: string = '^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-]+)(\\.[a-zA-Z]{2,5}){1,2}$'
    const controls: any = {
      username: new FormControl(null, [Validators.required, Validators.pattern(emailRegex)]),
      password: new FormControl(null, [Validators.required]),
      saveSession: new FormControl(false),
    }
    this.loginForm = new FormGroup(controls)
  }

  ngOnInit(): void {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/products'
  }

  attemptLogin() {
    const credentials = { username: this.loginForm.value.username, password: this.loginForm.value.password }
    this.authService.attemptLogin(credentials).subscribe(
      res => {
        if (res.status === 200
            && res.body?.username) {
          const user = { ...res.body }
          // If logging in and persisting session credentials
          if (this.loginForm.value.saveSession) {
            this.authService.saveSessionAndStore(user)
          } else {
            // If logging in but not persisting session credentials
            this.authService.saveSessionWithoutStoring(user)
          }
          this.router.navigateByUrl(this.returnUrl)
        }
      }, error => {
        this.loginForm.reset()
        alert('Invalid credentials. Try again with a different combination.')
      }
    )
  }

}
