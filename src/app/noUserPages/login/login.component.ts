import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService, customSession, LoginResponse } from '../../auth/auth.service';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observer } from 'rxjs';
import { URL_ENDPOINT_PRODUCTION } from 'src/app/services/Variables';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  loading = false;
  errorMessage: string | null = null;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  loginObserver: Observer<LoginResponse> = {
    next: (response: LoginResponse) => {
      const dataSession: customSession = { session: response.session, user: response.user }
      this.authService.login(dataSession);
      const { user } = response
      console.log(user)
      this.router.navigate([`/profile/${user.id}`]);
    },
    error: (err) => {
      this.loading = false;
      this.errorMessage = 'Login failed. Please check your credentials.';
      console.error(err);
    },
    complete: () => {
      this.loading = false;
    }
  };

  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;

    const { email, password } = this.loginForm.value;

    // Crear una instancia de FormData
    const formData = new FormData();
    formData.append('email', email);
    formData.append('password', password);

    const loginUrl = `${URL_ENDPOINT_PRODUCTION}/sign-in/`;

    // Enviar la solicitud con FormData
    this.http.post<LoginResponse>(loginUrl, formData)
      .subscribe(this.loginObserver);
  }
}
