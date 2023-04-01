import { Component } from '@angular/core';

@Component({
  selector: 'demo-app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent {
  login(authenticate:any) {
    console.log(authenticate);
  }
}
