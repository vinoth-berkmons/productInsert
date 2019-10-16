// Angular
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';

/** Page Routes */
const routes: Routes = [
	{
		path: '',
		component: PagesComponent,
		children: [
			{
				path: 'products',
				loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
			},
			{ path: '', redirectTo: 'products', pathMatch: 'full' },
			{ path: '**', redirectTo: 'products', pathMatch: 'full' }
		]
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class PagesRoutingModule {
}
