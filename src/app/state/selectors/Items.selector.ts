import {createFeatureSelector } from "@ngrx/store";
import { ItemModels } from "src/app/interfaces/productos.interfaces";


export const selectItem = createFeatureSelector<ReadonlyArray<ItemModels>>('items')



