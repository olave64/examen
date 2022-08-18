import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConsultasService {

  private url = 'http://localhost:3000/api/productos'
  private productos: any;
  constructor(private http:HttpClient) {
  }

  //_______________OBTENER PRODUCTOS_______________
  getProductos(){
    return this.http.get(this.url)
  }
}
