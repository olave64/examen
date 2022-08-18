import { Component } from '@angular/core';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {

  constructor() { }
  agregar(){
    console.log('Agregar producto');
  }



}
