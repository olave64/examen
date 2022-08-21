import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TablaComponent } from './view/tabla/tabla.component';


const routes: Routes = [
  {path: 'tabla', component: TablaComponent},
  {path: '', redirectTo:'tabla', pathMatch: 'full'},
  {path : '**', component: TablaComponent}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
