import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Products } from '../../../core/product/_models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() product: Products;
  @Output() selectedProduct: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
    console.log(this.product);
  }

  /* Selected Product */
  selectProduct(url: string) {
    const lastIndx = url.lastIndexOf('/');
    const id = url.substring(lastIndx + 1);
    this.selectedProduct.emit(id);
  }
}
