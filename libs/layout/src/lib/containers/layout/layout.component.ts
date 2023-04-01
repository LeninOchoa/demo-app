import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '@demo-app/data-models';
import { AuthService } from '@demo-app/auth';

@Component({
  selector: 'demo-app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  user$: Observable<User> | undefined;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.user$ = this.authService.user$;
  }
}
