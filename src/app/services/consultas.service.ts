import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Producto } from '../producto/producto';
@Injectable({
  providedIn: 'root'
})
export class ConsultasService {

  private url = 'http://localhost:3000/api/productos'

  constructor(private http:HttpClient) {
  }

  //-------------------Ruta del GET-------------------\\
  getProductos(){
    return this.http.get(this.url)
  }

  //--------------------Ruta del POST--------------------\\
  postProductos(nombre: String,cantidad:number,tipo:String,producto:Producto){
    return this.http.post(`${this.url}?nombreP=${nombre}&cantidadP=${cantidad}&tipoP=${tipo}`,producto)
  }

//------------------------------Ruta del DELETE------------\\
  deleteProducto(id:Number){

    return this.http.delete(`${this.url}?id=${id}`)
  }

//---------------------------Rut del PUT---------------------\\
  putProducto(id:number,nombre:String,cantidad:number,tipo:String,producto: Producto){
    return this.http.put(`${this.url}?id=${id}&nombreP=${nombre}&cantidadP=${cantidad}&tipoP=${tipo}`,producto)
  }
}
