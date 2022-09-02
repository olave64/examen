import { Component, OnInit} from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Producto } from 'src/app/producto/producto';
import { AppState } from 'src/app/state/app.state';
import { ConsultasService } from 'src/app/services/consultas.service';
import { CreateProducto, deleteProducto, retrievedItemList, updateProducto } from 'src/app/state/actions/items.actions';
import { selectItem } from 'src/app/state/selectors/Items.selector';
import { ItemModels } from 'src/app/interfaces/productos.interfaces';







@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {
  productos: Producto= {
    id:0,
    nombre:"",
    cantidad: 0,
    tipo:""
  }
  dataItems : ItemModels = {
    ID: 0,
    Nombre:"",
    Cantidad:0,
    Tipo: ""
  }

  items$: Observable<any> = new Observable();

  constructor(private store: Store<AppState>, private consultasService: ConsultasService)
  {
     this.items$ = this.store.select(selectItem)
  }
  ngOnInit(): void {
    //COGER DATOS DEL STORE
     this.loadData()
    //USAR ACTIONS

    }
    //  CARGANDO LA DATA
    loadData(): void{
      this.consultasService.getProductos().subscribe((res)=>{
        console.log(res)
        this.store.dispatch(retrievedItemList({items: res}))
      })

    }
     //AGREGAR PRODUCTO
    addData(){
      if(this.productos.id > 0){
        console.log('se esperaban 3 argumentos y se enviaron cuatro')
        alert('No es necesario mandar el parametro id');
        this.productos.id = 0
        this.clear()
        return

      }
      if( this.productos.nombre =="" || this.productos.cantidad ==null || this.productos.tipo ==""){
        alert('Hay campos vacios');
        return
      }
      const items: ItemModels= {
        ID : 0,
        Nombre : "0",
        Cantidad : 0,
        Tipo : "0"

      }

      this.consultasService.postProductos(
          items.Nombre = this.productos.nombre,
          items.Cantidad = this.productos.cantidad,
          items.Tipo = this.productos.tipo,
          this.productos).subscribe((res)=>{
            items.ID = res.Id
            this.store.dispatch(CreateProducto({item: items}))
            this.clear()
          });
    }

    // ACTUALIZAR UN PRODUCTO
    updateData()
    {
      const items: ItemModels= {
        ID : 0,
        Nombre : "0",
        Cantidad : 0,
        Tipo : "0"

      }

      this.consultasService.putProducto(
        this.productos.id,
        this.productos.nombre,
        this.productos.cantidad,
        this.productos.tipo,
        this.productos).subscribe((data)=>{
          console.log(data)
          items.ID = data.Id
          items.Nombre = data.Nombre
          items.Cantidad = data.Cantidad
          items.Tipo = data.Tipo
          this.store.dispatch(updateProducto({item: items}))
          this.clear()
        })

    }
    //ELIMINAR UN PRODUCTO
    deleteData(id:number)

    {
      const confirmacion = confirm('Deseas eliminar el producto con id '+id);
      if (!confirmacion) {
        console.log(id)
        return
      }
      const dataItems: ItemModels = {
        ID: id,
        Nombre:this.productos.nombre,
        Cantidad:this.productos.cantidad,
        Tipo:this.productos.tipo
      }

       this.consultasService.deleteProducto(id).subscribe((data)=>{
        console.log(data)
        this.store.dispatch(deleteProducto({item: dataItems}))

       })
    }

  clear (){
    this.productos.id = 0
    this.productos.nombre = ""
    this.productos.cantidad = 0
    this.productos.tipo = ""

  }

  //------------Agrega los volores a los inputs al tratar de actualizar-----\\
  pasarDatos(id:number, nombre: string, cantidad: number, tipo: string){

    this.productos.id = id
    this.productos.nombre = nombre
    this.productos.cantidad = cantidad
    this.productos.tipo = tipo

 }

}
