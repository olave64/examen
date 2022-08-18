import { Component, OnInit} from '@angular/core';
import { ConsultasService } from 'src/app/services/consultas.service';
import { map } from 'rxjs';

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


  eliminar(){
    console.log('Eliminar producto');
  }
  actualizar(){
    console.log('Actualizar producto');
  }

}
