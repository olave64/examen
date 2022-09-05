import { Component, EventEmitter, OnInit} from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';


import { Producto } from 'src/app/producto/producto';
import { AppState } from 'src/app/state/app.state';
import { ConsultasService } from 'src/app/services/consultas.service';
import { deleteProducto, retrievedItemList } from 'src/app/state/actions/items.actions';
import { selectItem } from 'src/app/state/selectors/Items.selector';
import { ItemModels } from 'src/app/interfaces/productos.interfaces';
import { Post } from 'src/app/interfaces/post.interface';




@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {
  id:number = 0
  nombre:string= ""
  cantidad: number = 0
  tipo: string = ""

  items$: Observable<any> = new Observable();

  productos: Producto= {
    id:0,
    nombre:"",
    cantidad: 0,
    tipo:""
  }
  dataItems : ItemModels = {
    Id: 0,
    Nombre:"",
    Cantidad:0,
    Tipo: ""
  }



  constructor(private store: Store<AppState>, private consultasService: ConsultasService)
  {
     this.items$ = this.store.select(selectItem)
  }
  ngOnInit(): void {
    //COGER DATOS DEL STORE
     this.loadData()

    }
    //-------------------------------------------------------------\\
  Enviar(id:number, nom:string, can: number, tip:string){
     this.id = id
     this.nombre = nom
     this.cantidad = can
     this.tipo = tip
  }
    //-------------------------------------------------------------\\

    //  CARGANDO LA DATA
    loadData(): void{
      this.consultasService.getProductos().subscribe((res)=>{
        console.log(res)
        this.store.dispatch(retrievedItemList({items: res}))
      })

    }
     //AGREGAR PRODUCTO

    //ELIMINAR UN PRODUCTO
    deleteData(id:number)

    {
      const confirmacion = confirm('Deseas eliminar el producto con id '+id);
      if (!confirmacion) {
        console.log(id)
        return
      }
      const dataItems: ItemModels = {
        Id: id,
        Nombre:this.productos.nombre,
        Cantidad:this.productos.cantidad,
        Tipo:this.productos.tipo
      }

       this.consultasService.deleteProducto(id).subscribe((data)=>{
        console.log(data)
        this.store.dispatch(deleteProducto({item: dataItems}))

       })
    }

}
