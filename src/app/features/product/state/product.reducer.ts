import { Action, createReducer, on, createSelector, createFeatureSelector } from '@ngrx/store';
import * as ProductActions from './product.actions';
import { Product } from 'src/app/models/product';

export interface State {
  displayProductCode: boolean;
  currentProductId: number;
  products: Product[];
}

export const initialState: State = {
  displayProductCode: true,
  currentProductId: 0,
  products: []
};

// Selector functions
const getProductFeatureState = createFeatureSelector<State>('product');

export const getShowProductCode = createSelector(
  getProductFeatureState,
  state => state.displayProductCode
);

export const getCurrentProduct = createSelector(
  getProductFeatureState,
  state => state.currentProductId
);



const productReducer = createReducer(
  initialState,
  on(ProductActions.toggleProductCode, state => ({ ...state, displayProductCode: !state.displayProductCode })),
  on(ProductActions.setCurrentProduct, (state, {currentProductId}) => ({ ...state, currentProductId: currentProductId })),
);

/*
const _counterReducer = createReducer(initialState,
  on(increment, state => state + 1),
  on(decrement, state => state - 1),
  on(reset, state => 0),
);
*/


export function reducer(state: State | undefined, action: Action) {
  return productReducer(state, action);
}

export const productFeatureKey = 'product';
