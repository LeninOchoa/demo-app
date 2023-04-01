import {ChangeDetectionStrategy, Component, EventEmitter, Output} from '@angular/core';
import {Authenticate} from "@demo-app/data-models";

@Component({
  selector: 'demo-app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent {
  // eslint-disable-next-line @angular-eslint/no-output-native
  @Output() submit = new EventEmitter<Authenticate>();

  login(authenticate: Authenticate) {
    this.submit.emit(authenticate);
  }
}
