import { Route } from '@angular/router';
import { authRoutes, canActivateAuthGuard } from '@demo-app/auth';

export const appRoutes: Route[] = [
  { path: '', pathMatch: 'full', redirectTo: 'products' }, // added
  { path: 'auth', children: authRoutes },
  {
    path: 'products',
    loadChildren: () =>
      import('@demo-app/products').then((m) => m.ProductsModule),
    canActivate: [canActivateAuthGuard],
  },
];
