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
    }
    this.loginForm = new FormGroup(controls)
  }

  ngOnInit(): void {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/products'
  }

  attemptLogin() {
    this.authService.attemptLogin(this.loginForm.value).subscribe(
      res => {
        if (res.status === 200
            && res.body?.username) {
          const user = { ...res.body }
          this.authService.createSession(user)
          this.router.navigateByUrl(this.returnUrl)
        } else {
          this.loginForm.reset()
          alert('Invalid credentials. Try again with a different combination.')
        }
      }
    )
  }

}
