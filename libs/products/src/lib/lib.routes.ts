import { Route } from '@angular/router';
import { ProductsComponent } from './containers/products/products.component';

export const productsRoutes: Route[] = [
  { path: '',  component: ProductsComponent },
];
