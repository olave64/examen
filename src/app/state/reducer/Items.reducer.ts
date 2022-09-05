
import { identifierName } from "@angular/compiler";
import { createReducer, on } from "@ngrx/store";

import { ItemModels } from 'src/app/interfaces/productos.interfaces';
import { CreateProducto, deleteProducto, retrievedItemList, updateProducto } from "../actions/items.actions";


export const initialState: ReadonlyArray<ItemModels> = []



//productos reducer
export const itemsReducer = createReducer(
  initialState,

  on(retrievedItemList, (oldState, {items})=>{
    return [...oldState, ...items]
  }),
  on(CreateProducto,(oldState,{item})=>{
    return [...oldState, ...[item]]
  }),
  on(updateProducto,(oldState,{item})=>{
    let newState = oldState.filter((_) => _.Id != item.Id);
    newState.unshift( item);
    return newState;
  }),
  on(deleteProducto,(oldState,{item})=>{
    const newState = oldState.filter((_) => _.Id != item.Id);
    return newState;
  }),

);

