import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../../../services/authentication.service';
import { User } from '../../../../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup

  constructor(
    private authService: AuthenticationService,
    private router: Router,
  ) {
    const emailRegex: string = '^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-]+)(\\.[a-zA-Z]{2,5}){1,2}$'
    const controls: any = {
      firstName: new FormControl(null, [Validators.required]),
      lastName: new FormControl(null, [Validators.required]),
      username: new FormControl(null, [Validators.required, Validators.pattern(emailRegex)]),
      password: new FormControl(null, [Validators.required]),
      address: new FormControl(null),
      phone: new FormControl(null),
    }
    this.signupForm = new FormGroup(controls)
  }

  ngOnInit(): void {
  }

  attemptSignup() {
    const user: User = this.signupForm.value
    this.authService.attemptSignup(user).subscribe(
      res => {
        if (res.status === 200
          && res.body?.username) {
          const user = { ...res.body }
          this.authService.createSession(user)
          this.router.navigate(['/products'])
        } else {
          this.signupForm.reset()
          alert('An account already exists for this email address. Please, try registering with a different address.')
        }
      }
    )
  }
}
