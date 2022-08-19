import { Component, OnInit} from '@angular/core';
import { ConsultasService } from 'src/app/services/consultas.service';


@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {

  productos: any = [];
  constructor(private consultas:ConsultasService){

  }
  ngOnInit(): void {

    this.consultas.getProductos().subscribe((data)=> {
      this.productos = data;

      console.log(this.productos);
    })
  }

  eliminar(id:number){
    if(id === null){
      console.log('No se a ingresado un id')
      return
    }
    const confirmacion = confirm();
    if (!confirmacion) {
       console.log('no confirmado')
       return
    }
    this.consultas.deleteProducto(id).subscribe(resp =>{
      console.log(resp);
      window.location.reload();
    })




  }
  actualizar(){
    console.log('Actualizar producto');
  }



}
