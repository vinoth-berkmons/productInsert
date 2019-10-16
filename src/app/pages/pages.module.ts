
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Routing Module */
import { PagesRoutingModule } from './pages-routing.module';
import { ThemeModule } from './../theme/theme.module';

/* Component */
import { PagesComponent } from './pages.component';

@NgModule({
  declarations: [PagesComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ThemeModule
  ]
})
export class PagesModule { }
