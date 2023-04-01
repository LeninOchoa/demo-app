import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { authRoutes } from './lib.routes';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './containers/login/login.component';
import { LoginFormComponent } from './components/login-form/login-form.component';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(authRoutes), RouterModule, HttpClientModule],
  declarations: [LoginComponent, LoginFormComponent],
})
export class AuthModule {}
