
/* NgRx */
import { createAction, props } from '@ngrx/store';

export const toggleProductCode = createAction('[Product] Toggle Product Code');
export const setCurrentProduct = createAction('[Product] Set Current Product', props<{ currentProductId: number }>());

/*
export enum ProductActionTypes {
  ToggleProductCode = '[Product] Toggle Product Code',
}
*/

