/**
 * Componente usado na simulação da cotação
 */
import { Component, Input, OnInit } from '@angular/core';
import { CoberturaResponseModel, SimulacaoResponseModel, OpcaoPagamentoModel } from '../../cotacao/models/SimulacaoResponse.model';

@Component({
  selector: 'app-simulacao-seguro',
  templateUrl: './simulacao-seguro.component.html',
  styleUrls: ['./simulacao-seguro.component.css']
})
export class SimulacaoSeguroComponent implements OnInit {

  @Input() simulacao: SimulacaoResponseModel;
  coberturas: CoberturaResponseModel[];
  parcelas: OpcaoPagamentoModel[];

  constructor() { }

  ngOnInit(): void {
    this.coberturas = this.simulacao.produtos[0].coberturas;
    this.parcelas = this.simulacao.opcoes_pagamento;
  }

}
