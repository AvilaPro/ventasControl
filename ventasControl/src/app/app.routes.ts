import { Routes } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
  {
    path: 'productos',
    component: ProductsComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  //ruta por defecto
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  }
];
