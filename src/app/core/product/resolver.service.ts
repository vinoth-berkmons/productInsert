
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { ProductResolved } from './_models/resolved';
import { ProductService } from './_services/product.service';


@Injectable({
  providedIn: 'root'
})
export class ProductResolver implements Resolve<ProductResolved> {

  constructor(private productService: ProductService) { }

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): Observable<ProductResolved> {
    const id = route.paramMap.get('id');
    console.log(id);
    if (!id) {
      const message = `Product id ${id} was not found`;
      console.error(message);
      return of({ product: null, error: message });
    }

    return this.productService.getProductByCategory(id)
       .pipe(
        map(product => ({ product: product })),
        catchError(error => {
          const message = `Retrieval error: ${error}`;
          console.error(message);
          return of({ product: null, error: message });
        })
      );
  }

}
