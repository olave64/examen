import { createAction, props } from "@ngrx/store";
import { ItemModels } from "src/app/interfaces/productos.interfaces";
// cargar productos
export const retrievedItemList = createAction(
  '[Cargar Lista] cargar lista',
  props<{items: ReadonlyArray<ItemModels>}>()
);

//CREAR EL POSTACTIONS PARA LOS PRODUCTOS
export const CreateProducto = createAction(
  '[Crear producto] crear producto',
  props<{ item: ItemModels}>()
);


// CREAR ACTION PARA ACTUALIZAR PRODUCTO

export const updateProducto = createAction(
  '[Actualizar Producto] actualizar producto',
  props<{item: ItemModels}>()
);
// CREAR ACTION PARA ELIMINAR

export const deleteProducto = createAction(
  '[Eliminar Producto] eliminar producto',
  props<{item: ItemModels}>()
);
 




