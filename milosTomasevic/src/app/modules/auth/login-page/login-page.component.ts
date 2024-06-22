import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  username!: string;
  password!: string;
  submitted: boolean = false;
  wrongCredentials: boolean = false;
  correctUsername: string = 'test';
  correctPassword: string = 'test123';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(form: any) {
    this.submitted = true;
    if (this.username?.toLowerCase() !== this.correctUsername.toLowerCase() || this.password?.toLowerCase() !== this.correctPassword.toLowerCase()) {
      this.wrongCredentials = true;
      return;
    }
    this.router.navigate(['home'])
  }
}