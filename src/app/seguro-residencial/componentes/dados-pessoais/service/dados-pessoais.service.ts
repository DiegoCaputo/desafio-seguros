import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DadosPessoaisService {

  constructor(private httpClient: HttpClient) { }

  getEndereco(cep: string): Observable<any> {
    return this.httpClient.get<any>(`https://viacep.com.br/ws/${cep}/json/`).pipe(catchError(this.erro));
  }

  getEstados(): Observable<any> {
    return this.httpClient.get<any>("https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome").pipe(catchError(this.erro));
  }

  erro(error: HttpErrorResponse) {
    return throwError(error.message);
  }
}
