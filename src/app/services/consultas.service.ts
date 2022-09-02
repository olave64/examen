import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Producto } from '../producto/producto';
import { map, Observable, of } from 'rxjs';
import { Post } from '../interfaces/post.interface';
import { JsonPipe } from '@angular/common';



@Injectable({
  providedIn: 'root'
})
export class ConsultasService {



  private url = 'http://localhost:3000/api/productos'



  constructor(private http:HttpClient) {
  }

  //-------------------Ruta del GET-------------------\\
  getProductos(): Observable<any>{
    const data = this.http.get(this.url)
    return data
  }

  //--------------------Ruta del POST--------------------\\
  postProductos(nombre: String,cantidad:number,tipo:String,producto:Producto){

    return this.http.post<Post>(`${this.url}?nombreP=${nombre}&cantidadP=${cantidad}&tipoP=${tipo}`,producto)


  }

//------------------------------Ruta del DELETE------------\\
  deleteProducto(id:Number){

    return this.http.delete(`${this.url}?id=${id}`)
  }

//---------------------------Rut del PUT---------------------\\
  putProducto(id:number,nombre:String,cantidad:number,tipo:String,producto: Producto){
   const respuesta = this.http.put<Post>(`${this.url}?id=${id}&nombreP=${nombre}&cantidadP=${cantidad}&tipoP=${tipo}`,producto)
   return respuesta
  }

}
