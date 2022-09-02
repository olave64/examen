import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { catchError, EMPTY, map, mergeMap, switchMap } from "rxjs";
import { ConsultasService } from "src/app/services/consultas.service";
import { AppState } from "../app.state";

@Injectable()
export class itemsEffects{

  constructor(private actions$: Actions,
    private consultaService: ConsultasService,
    private appStore: Store<AppState> ){

  }
  loadItems$ = createEffect(() => this.actions$.pipe(
    ofType('[Items List] cargar Productos'),
    mergeMap(()=> this.consultaService.getProductos()
    .pipe(
      map(items =>({type: '[Items List] Productos Cargados', items})),
      catchError(()=> EMPTY)
  ))
  )
  );

  //EFFECS PARA GUARDADO DE NUEVO PRODUCTO
  


}
