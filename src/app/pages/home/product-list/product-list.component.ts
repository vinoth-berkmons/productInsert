import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

/* RxJs */
import { catchError, map } from 'rxjs/operators';
import { Subject, EMPTY, BehaviorSubject } from 'rxjs';

/* Service */
import { ProductService } from './../../../core/product/_services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  /* Setting Error message as a observable */
  private errorMessageSubject = new Subject<string>();
  errorMessage$ = this.errorMessageSubject.asObservable();

    /* Setting Loading  as a observable */
  private loadingSubject = new BehaviorSubject<boolean>(true);
  loading$ = this.loadingSubject.asObservable();

  constructor(private productService: ProductService,
    private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    console.log('home loaded');
  }

  /* Get All Products */
  products$ = this.productService.getProducts$
    .pipe(map(data => {
      this.loadingSubject.next(false);
      return data
    }),
      catchError(err => {
        this.loadingSubject.next(false);
        this.errorMessageSubject.next(err);
        return EMPTY;
      })
    )

  selectedProductId(id: string) {
    console.log(id);
    this.router.navigate([`../insert/${id}`], { relativeTo: this.route });
  }

}
