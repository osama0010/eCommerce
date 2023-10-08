import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/core/services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  isLoading: boolean = false;
  apiError: string = "";
  isNotValidForm: boolean = false;
  constructor(private _AuthService: AuthService, private _router: Router) {

  }

  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.pattern(/^[A-Z[a-z0-9]{3,8}$/)]),
  })

  login(form: FormGroup) {
    console.log(form);
    if (form.valid) {
      this.isLoading = true
      this._AuthService.login(form.value).subscribe({
        next: (res: any) => {
          console.log(res);
          this.isLoading = false
          localStorage.setItem("userToken", res.token)
          this._AuthService.getUserData() 
          this._router.navigate(['/home'])
        },
        error: (err) => {
          console.log(err.error.errors.msg);
          this.apiError = err.error.errors.msg
        },
      })
    } else {
      this.isNotValidForm = true;
    }
  }  
}
