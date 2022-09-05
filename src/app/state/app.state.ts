import { ActionReducerMap } from "@ngrx/store";
import { ItemModels } from "../interfaces/productos.interfaces";
import { itemsReducer } from "./reducer/Items.reducer";





export interface AppState{
  items: ReadonlyArray<ItemModels>
}
export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  items : itemsReducer

}

