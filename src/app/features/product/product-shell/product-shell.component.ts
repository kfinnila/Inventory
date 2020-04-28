import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product';
import { ProductService } from '../product-service.service';

import { Store, select } from '@ngrx/store';
import { toggleProductCode, setCurrentProduct } from './../state/product.actions';
import * as fromProduct from './../state/product.reducer';

@Component({
  selector: 'app-product-shell',
  templateUrl: './product-shell.component.html',
  styleUrls: ['./product-shell.component.css']
})
export class ProductShellComponent implements OnInit {

  products$: Observable<Product[]>;
  currentProductId$: Observable<number>;
  displayCode$: Observable<boolean>;

  constructor(private productService: ProductService, private store: Store<fromProduct.State>) { }

  ngOnInit(): void {
    this.products$ = this.productService.getProducts();
    this.displayCode$ = this.store.pipe(select(fromProduct.getShowProductCode));
    console.log(this.displayCode$);
    this.displayCode$.subscribe(x => console.log(x));
    console.log('state:', this.store);
    this.currentProductId$ = this.store.pipe(select(fromProduct.getCurrentProduct));
  }

  showCode() {
    this.store.dispatch(toggleProductCode());
  }

  selectProduct(product: Product) {
    this.store.dispatch(setCurrentProduct({currentProductId: product.id}));
  }

}
