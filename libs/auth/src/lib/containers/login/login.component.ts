import {ChangeDetectionStrategy, Component } from '@angular/core';
import {AuthService} from "../../services/auth/auth.service";
import {Authenticate} from "@demo-app/data-models";


@Component({
  selector: 'demo-app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent {
  constructor(private authService: AuthService) {}

  login(authenticate: Authenticate) {
    this.authService.login(authenticate).subscribe(s => console.log(s));
  }
}
