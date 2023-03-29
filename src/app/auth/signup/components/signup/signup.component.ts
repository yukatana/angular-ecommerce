import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../../../services/authentication.service';
import { User } from '../../../../models/user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup

  constructor(
    private authService: AuthenticationService,
  ) {
    const controls: any = {
      firstName: new FormControl(null, [Validators.required]),
      lastName: new FormControl(null, [Validators.required]),
      username: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required]),
      address: new FormControl(null),
      phone: new FormControl(null),
    }
    this.signupForm = new FormGroup(controls)
  }

  ngOnInit(): void {
  }

  attemptSignup(user: User) {
    this.authService.attemptSignup(user).subscribe(
      res => {

      }
    )
  }
}
