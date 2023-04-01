import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from './containers/layout/layout.component';
import { MaterialModule } from '@demo-app/material';

@NgModule({
  imports: [CommonModule, MaterialModule, RouterModule],
  declarations: [LayoutComponent],
  exports: [LayoutComponent],
})
export class LayoutModule {}
