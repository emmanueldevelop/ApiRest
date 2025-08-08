import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { UsuariosI } from '../Interfaces/usuarios';

@Injectable({
  providedIn: 'root',
})
export class PrincipalService {

    constructor(public http :HttpClient){
    }

    public getList(): Observable<UsuariosI[]> {
    return this.http.get<UsuariosI[]>(`http://localhost:8081/usuario/getall`).pipe(
      catchError(this.handleError)
    );
  }
/*
  //Obtener datos por id
  public getItem(id: number): Observable<Usuarios> {
    const response = this.http.get<Usuarios>(`http://127.0.0.1:8000/api/datos/dato/${id}`).pipe(
      catchError(this.handleError)
    );
    return response;
  }

  //Creador de Expediente
  public create(datosData: FormGroup): Observable<Usuarios> {
    const data = datosData.value;
    let datoData = new Usua(null, data.ZONA, data.COLONIA, data.CALLE_1, data.CALLE_O_REFERENCIA, data.MOTIVO_DE_LA_DETENCION, data.COORDENADA_Y_LATITUD, data.COORDENADA_X_LONGITUD);
    console.log(datoData);
    const response = this.http.post<DatosI>(`http://127.0.0.1:8000/api/datos/create`, datoData).pipe(
      catchError(this.handleError)
    );
    return response;
  }

  // Editar / Actualziar datos

  public update(id: number, datosData: FormGroup): Observable<any> {
    const data = datosData.value;
    let datoData = new Datos(null, data.ZONA, data.COLONIA, data.CALLE_1, data.CALLE_O_REFERENCIA, data.MOTIVO_DE_LA_DETENCION, data.COORDENADA_Y_LATITUD, data.COORDENADA_X_LONGITUD);
    const response = this.http.put<any>(`http://127.0.0.1:8000/api/datos/dato/${id}`, datoData).pipe(
      catchError(this.handleError)
    );
    return response;
  }

  // Eliminar datos

  public delete(id: any): Observable<any> {
    return this.http.delete(`http://127.0.0.1:8000/api/datos/dato/${id}`).pipe(
      catchError(this.handleError)
    );
  }
*/
  // Manejador de errores API
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('Se produjo un error:', error.error.message);
    } else {
      console.error(
        `Código devuelto por el backend ${error.status}, ` +
        `El cuerpo era: ${error.error}`);
    }
    return throwError (
      'Algo malo sucedió; por favor inténtalo de nuevo más tarde.');
  }

}
