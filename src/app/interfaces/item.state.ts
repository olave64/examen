import { ItemModels } from "./productos.interfaces";

export interface ItemsState{
  loading: boolean,
  items : ReadonlyArray<ItemModels>;

}
