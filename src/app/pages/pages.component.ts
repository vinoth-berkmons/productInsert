import { Component } from '@angular/core';

/* Route Animation */
import { slideInAnimation } from './page.animation';


@Component({
    selector: 'app-pages',
    styleUrls: ['pages.component.scss'],
    animations: [slideInAnimation],
    template: `
    <app-header></app-header>
    <div class="main_wrapper" [@slideInAnimation]="o.isActivated ? o.activatedRoute : ''">
        <router-outlet  #o="outlet"></router-outlet>
    </div>
  `,
})
export class PagesComponent {

}