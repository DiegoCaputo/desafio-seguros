import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

import {
  OfertaResidencialModel, OfertaQuestaoModel,
  SimulacaoModel, SimulacaoResponseModel
} from '../cotacao/models';

@Injectable({
  providedIn: 'root'
})
export class SeguroResidencialService {

  constructor(private httpClient: HttpClient) { }

  getOfertasResidencial(): Observable<OfertaResidencialModel> {
    try {
      return this.httpClient.get<OfertaResidencialModel>("/v1/ofertas/residencial");
    } catch (error) {
      throw error;
    }
  }

  getOfertaQuestoes(id_oferta: number): Observable<Array<OfertaQuestaoModel>> {
    return this.httpClient.get<Array<OfertaQuestaoModel>>(`/v1/ofertas/${id_oferta}/questoes`).pipe(catchError(this.erro));
  }

  getSimulacao(): Observable<SimulacaoResponseModel> {
    return this.httpClient.get<SimulacaoResponseModel>(`/v1/ofertas/seguro/simulacao`).pipe(catchError(this.erro));
  }

  enviarSimulacao(simulacao: SimulacaoModel) {
    return this.httpClient.post(`/v1/simulacoes/assistencias`, simulacao).pipe(catchError(this.erro));
  }

  erro(error: HttpErrorResponse) {
    return throwError(error.message);
  }

}
