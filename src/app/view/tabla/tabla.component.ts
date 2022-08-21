import { Component, OnInit} from '@angular/core';
import { ConsultasService } from 'src/app/services/consultas.service';
import { Producto } from 'src/app/producto/producto';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {

  producto: Producto = {
    id: 0,
    nombre: '',
    cantidad: 0,
    tipo: ''
    }


  productos: any = [];
  constructor(private consultas:ConsultasService){

  }
  ngOnInit(): void {

    //---ejecuta la consulta a la ruta GET para cargar los datos a la tabla ---\\
    this.consultas.getProductos().subscribe((data)=> {
      this.productos = data;

      console.log(this.productos);
    })
  }
    //---ejecuta la consulta a la ruta DELETE para cargar los datos a la tabla ---\\
  eliminar(id:number){
    if(id === null){
      console.log('No se a ingresado un id')
      return
    }
    const confirmacion = confirm('Deseas eliminar el producto con id '+id);
    if (!confirmacion) {
       console.log(id)
       return
    }
    this.consultas.deleteProducto(id).subscribe(resp =>{
      console.log(resp);
      window.location.reload();
    })
  }

  //---ejecuta la consulta a la ruta POST para cargar los datos a la tabla ---\\
  agregar(){

    if(this.producto.id > 0){
      console.log('se esperaban 3 argumentos y se enviaron cuatro')
      alert('No es necesario mandar el parametro id');
      this.producto.id = 0
      return

    }
    if( this.producto.nombre =="" || this.producto.cantidad ==null || this.producto.tipo ==""){
      alert('Hay campos vacios');
      return
    }
    this.consultas.postProductos(
      this.producto.nombre
      ,this.producto.cantidad
      ,this.producto.tipo,this.producto).subscribe(response =>{
      console.log(this.producto)
      console.log(response);
      window.location.reload();

    });

  }

 //---ejecuta la consulta a la ruta PUT para cargar los datos a la tabla ---\\
  actualizar(){
    if(this.producto.id < 1){

      alert("NO HAS ESCOGIDO PRODUCTO");
      return

    }
    this.consultas.putProducto(this.producto.id,this.producto.nombre,this.producto.cantidad,this.producto.tipo,this.producto).subscribe(resp =>{
      console.log(resp);
      window.location.reload();
    })
  }

  //------ resetea los valores de los inputs del html -------\\
  clear (){
    this.producto.id = 0
    this.producto.nombre = ""
    this.producto.cantidad = 0
    this.producto.tipo = ""

  }

  //------------Agrega los volores a los inputs al tratar de actualizar-----\\
  pasarDatos(id:number, nombre: string, cantidad: number, tipo: string){

    this.producto.id = id
    this.producto.nombre = nombre
    this.producto.cantidad = cantidad
    this.producto.tipo = tipo

 }

}
