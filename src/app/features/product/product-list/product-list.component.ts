import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/product';
import { Observable } from 'rxjs';
import { ProductService } from '../product-service.service';
import { Store, select } from '@ngrx/store';

import { toggleProductCode, setCurrentProduct } from './../state/product.actions';
import * as fromProduct from './../state/product.reducer';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  @Input() products: Product[];
  @Input() currentProductId: number | null;
  @Input() displayProductCode: boolean;
  @Output() selected = new EventEmitter<Product>();
  @Output() toggleShow = new EventEmitter<void>();

  /*
  products$: Observable<Product[]>;
  currentProductId$: Observable<number>;
  displayCode$: Observable<boolean>;*/

  constructor(/*private productService: ProductService, private store: Store<fromProduct.State>*/) { }

  ngOnInit(): void {
    /*
    this.products$ = this.productService.getProducts();
    this.displayCode$ = this.store.pipe(select(fromProduct.getShowProductCode));
    console.log(this.displayCode$);
    this.displayCode$.subscribe(x => console.log(x));
    console.log('state:', this.store);
    this.currentProductId$ = this.store.pipe(select(fromProduct.getCurrentProduct));*/
  }


  showCode(value: boolean) {
    this.toggleShow.emit();
    // this.displayProductCode = value;
    // this.store.dispatch(toggleProductCode());
  }

  selectProduct(product: Product) {
    this.selected.emit(product);
    // this.store.dispatch(setCurrentProduct({currentProductId: id}));
  }

}
