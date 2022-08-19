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

  //_______________OBTENER PRODUCTOS_______________
  getProductos(){
    return this.http.get(this.url)
  }
  //http://localhost:3000/api/productos3?nombreProducto=Auto&cantidadProducto=2&tipoProducto=Transporte
  postProductos(nombre: String,cantidad:number,tipo:String,producto:Producto){
    return this.http.post(`${this.url}?nombreP=${nombre}&cantidadP=${cantidad}&tipoP=${tipo}`,producto)
  }

//------------------------------ELIMINAR--------------------------
  deleteProducto(id:Number){

    return this.http.delete(`http://localhost:3000/api/productos?id=${id}`)
  }
//---------------------------ACTUALIZAR---------------------------------
  putProducto(id:number,nombre:String,cantidad:number,tipo:String,producto: Producto){
    return this.http.put(`${this.url}?id=${id}&nombreP=${nombre}&cantidadP=${cantidad}&tipoP=${tipo}`,producto)
  }
}
