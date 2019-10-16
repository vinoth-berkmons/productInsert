
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

/* RXJS */
import { throwError, Observable, Subject } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

/*  Environment */
import { env_params } from '../../../../environments/environment';

/* Model */
import { Products, ProductDetail } from '../_models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  /* Get List Of Products */
  getProducts$ = this.http.get<Products>(env_params.apiEndPoint)
  .pipe(
    tap(data => console.log('Products', JSON.stringify(data))),
    catchError(this.handleError)
  );

  /* Get Product by Category */
  getProductByCategory(categoryId: string): Observable<ProductDetail> {
    console.log(categoryId);
    return this.http.get<ProductDetail>(`${env_params.apiEndPoint}/${categoryId}`)
    .pipe(
      map(data => {
        console.log(data);
        return data;
      }),
      catchError(this.handleError)
    );
  }


  private handleError(err) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }
}
