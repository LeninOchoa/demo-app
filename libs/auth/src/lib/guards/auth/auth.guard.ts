import {inject, Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot} from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import {map, Observable} from "rxjs";


@Injectable({
  providedIn: 'root',
})
export class AuthGuardService {
  canActivate(router: Router, authService: AuthService): Observable<boolean> {
    console.log('AuthGuardService');
    return authService.user$.pipe(
      map(user => {
        if (user) {
          console.log('AuthGuardService', user);
          return true;
        } else {
          router.navigate([`/auth/login`]);
          return false;
        }
      })
    );
  }
}

export const canActivateAuthGuard: CanActivateFn =
  (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    console.log('canActivateAuthGuard');
    return inject(AuthGuardService).canActivate(inject(Router),inject(AuthService));
  };
