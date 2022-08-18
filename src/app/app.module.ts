import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { TablaComponent } from './view/tabla/tabla.component';
import { AgregarComponent } from './view/agregar/agregar.component';


@NgModule({
  declarations: [
    AppComponent,
    TablaComponent,
    AgregarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
