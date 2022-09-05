import { Component,Input} from '@angular/core';
import { Producto } from 'src/app/producto/producto';
import { ItemModels } from 'src/app/interfaces/productos.interfaces';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import { ConsultasService } from 'src/app/services/consultas.service';
import { CreateProducto,  updateProducto } from 'src/app/state/actions/items.actions';



@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.css']
})
export class InputsComponent {
   // RECIVIR LOS DATOS DE TABLA COMPONENTS
  @Input() idActualizar:number = 0
  @Input() nombreActualizar = ""
  @Input() cantidadActualizar = 0
  @Input() tipoActualizar = ""
  // FIN RECIVIR DATOS DE TABLA COMPONENTS

  //
  productos: Producto= {
    id: 0,
    nombre: "",
    cantidad: 0,
    tipo: ""
  }

  constructor(private store : Store<AppState>, private consultasService: ConsultasService) {}

   // AGREGAR PRODUCTOS
  addData(){
    if(this.idActualizar > 0){

      console.log('se esperaban 3 argumentos y se enviaron cuatro')
      alert('No es necesario mandar el parametro id');
      this.clear()
      return

    }

    if(this.nombreActualizar =="" || this.cantidadActualizar < 0 || this.tipoActualizar ==""){
      alert('Hay campos vacios');
      return
    }
    const items: ItemModels= {
      Id : 0,
      Nombre : "0",
      Cantidad : 0,
      Tipo : "0"
    }

    this.consultasService.postProductos(
        this.nombreActualizar,
        this.cantidadActualizar,
        this.tipoActualizar,
        this.productos).subscribe((res)=>{
          items.Id = res.Id
          items.Nombre = res.Nombre
          items.Cantidad = res.Cantidad
          items.Tipo = res.Tipo
          this.store.dispatch(CreateProducto({item: items}))
        });
        this.clear()
  }
   // FIN AGREGAR PRODUCTO

  // ACTUALIZAR UN PRODUCTO
  updateData()
  {
    if(this.idActualizar == null || this.nombreActualizar =="" || this.cantidadActualizar ==null || this.tipoActualizar ==""){
      alert('Hay campos vacios');
      return
    }

    const items: ItemModels= {
      Id : 0,
      Nombre : "0",
      Cantidad : 0,
      Tipo : "0"

    }

    this.consultasService.putProducto(
      this.productos.id = this.idActualizar,
      this.nombreActualizar,
      this.cantidadActualizar,
      this.tipoActualizar,
      this.productos).subscribe((data)=>{
        console.log(data)
        items.Id = data.Id,
        items.Nombre = data.Nombre,
        items.Cantidad = data.Cantidad,
        items.Tipo = data.Tipo,
        this.store.dispatch(updateProducto({item: items}))

      })
    this.clear()
  }
  // FIN ACTUALIZAR PRODUCTO

  // VACIAR INPUTS
  clear (){
    this.idActualizar = 0,
    this.nombreActualizar = "",
    this.cantidadActualizar = 0,
    this.tipoActualizar = ""

  }
  // FIN VACIAR INPUTS
}
