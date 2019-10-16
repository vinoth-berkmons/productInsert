
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

/* RxJs */
import { Subject } from 'rxjs';

/* Angular Material */
import { MatSnackBar } from '@angular/material/snack-bar';

/* Model */
import { ProductDetail } from './../../../core/product/_models/product';
import { ProductResolved } from './../../../core/product/_models/resolved';


@Component({
  selector: 'app-product-insert',
  templateUrl: './product-insert.component.html',
  styleUrls: ['./product-insert.component.scss']
})
export class ProductInsertComponent implements OnInit {

  /* Input Receiver from Api Call */
  productInfo: ProductDetail;
  categoryType: string;


  /* Setting Error message as a observable */
  private errorMessageSubject = new Subject<string>();
  errorMessage$ = this.errorMessageSubject.asObservable();

  /* Form Setup */
  insertProductForm: FormGroup;

  constructor(private route: ActivatedRoute,
    private _snackBar: MatSnackBar,
    private router: Router) { }

  ngOnInit() {
    this.insertProductForm = new FormGroup({});
    this.categoryType = this.route.snapshot.paramMap.get('id');
    const resolvedData: ProductResolved = this.route.snapshot.data['resolvedData'];
    this.productInfo = resolvedData.product;
    console.log(resolvedData);
    this.errorMessageSubject.next(resolvedData.error)
    if(this.productInfo) {
      this.createForm(resolvedData.product)
    }
   

  }

  /* Create a Form for inserting Products */
  createForm(productInfo) {
    const group = {};
    productInfo.forEach(product => {
      group[product.caption] = new FormControl(product.defaultValue === 'False' ? '' : product.defaultValue,
        product.mandatory ? Validators.required : null);
    });

    this.insertProductForm = new FormGroup(group);

    /** Making fOrm as touched  */
    const controls = this.insertProductForm.controls;
    if (this.insertProductForm.invalid) {
      Object.keys(controls).forEach(controlName =>
        controls[controlName].markAsTouched()
      );
    }

  }


  /* Create Product */
  insertProduct(status: string) {
    if (status === 'CREATE') {
      this.router.navigate([`/`], { relativeTo: this.route });
      this._snackBar.open('Successful Inserted!', 'OK', {
        duration: 3000
      });
    } else {
      this.router.navigate([`/`], { relativeTo: this.route });
    }
  }

}
