import {Component, EventEmitter, Output} from '@angular/core';
import {Authenticate} from "@demo-app/data-models";

@Component({
  selector: 'demo-app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent {
  // eslint-disable-next-line @angular-eslint/no-output-native
  @Output() submit = new EventEmitter<Authenticate>();

  login(authenticate: Authenticate) {
    this.submit.emit(authenticate);
  }
}
