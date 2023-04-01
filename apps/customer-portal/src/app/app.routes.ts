import { Route } from '@angular/router';
import { authRoutes } from '@demo-app/auth';

export const appRoutes: Route[] = [{ path: 'auth', children: authRoutes }];
