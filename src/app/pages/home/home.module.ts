import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/* Import Material Modules */
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSnackBarModule} from '@angular/material/snack-bar';

/* Import Components */
import { HomeComponent } from './home.component';
import { ProductComponent } from './product/product.component';
import { ProductInsertComponent } from './product-insert/product-insert.component';
import { ProductListComponent } from './product-list/product-list.component';

/* Import Services */
import { ProductService } from './../../core/product/_services/product.service';
import { ProductResolver } from './../../core/product/resolver.service';





/*  Components */
const COMPONENTS = [
	HomeComponent,
	ProductComponent,
	ProductInsertComponent,
	ProductListComponent
];

/* Modules */
const MODULES = [
	MatCardModule,
	MatGridListModule,
	MatButtonModule,
	MatSnackBarModule,
	MatInputModule,
	MatCheckboxModule
];

/* Services */
const SERVICES = [
	ProductService
];

/* Routes */
const routes: Routes = [
	{
		path: '',
		component: HomeComponent,
		children: [
			{
				path: '',
				redirectTo: 'list',
				pathMatch: 'full'
			},
			{
				path: 'list',
				component: ProductListComponent
			},
			{
				path: 'insert/:id',
				component: ProductInsertComponent,
				resolve: { resolvedData: ProductResolver }
			},
		]
	}
];

@NgModule({
	declarations: [...COMPONENTS],
	imports: [
		CommonModule,
		RouterModule.forChild(routes),
		FormsModule,
		ReactiveFormsModule,
		...MODULES,
	],
	providers: [...SERVICES]
})
export class HomeModule { }
