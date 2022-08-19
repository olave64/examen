import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { Producto } from 'src/app/producto/producto';
import { ConsultasService } from 'src/app/services/consultas.service';


@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent  {
  producto: Producto = {
  id: 0,
  nombre: '',
  cantidad: 0,
  tipo: ''
  }

  constructor(private consultas: ConsultasService) { }



  agregar(){
    this.consultas.postProductos(
      this.producto.nombre
      ,this.producto.cantidad
      ,this.producto.tipo,this.producto).subscribe(response =>{
      console.log(this.producto)
      console.log(response);
      window.location.reload();

    });

  }
  actualizar(){
    if(this.producto.id < 1){

      alert("Hello world!");

    }
    this.consultas.putProducto(this.producto.id,this.producto.nombre,this.producto.cantidad,this.producto.tipo,this.producto).subscribe(resp =>{
      console.log(resp);
      window.location.reload();
    })
  }

}
