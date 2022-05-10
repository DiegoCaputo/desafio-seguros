/**
 * Componente usado na resposta da simulação com as parcelas
 */
import { Component, Input, OnInit } from '@angular/core';

import { OpcaoPagamentoModel } from '../../cotacao/models';

@Component({
  selector: 'app-parcela-simulacao',
  templateUrl: './parcela-simulacao.component.html',
  styleUrls: ['./parcela-simulacao.component.css']
})
export class ParcelaSimulacaoComponent implements OnInit {

  @Input() parcelas: OpcaoPagamentoModel[];
  cartaoCredito: OpcaoPagamentoModel[];
  cartaoCredito1x?: OpcaoPagamentoModel;
  cartaoCredito6x?: OpcaoPagamentoModel;

  cartaoCreditoPS: OpcaoPagamentoModel[];
  cartaoCreditoPS1x?: OpcaoPagamentoModel;
  cartaoCreditoPS6x?: OpcaoPagamentoModel;

  constructor() { }

  ngOnInit(): void {
    this.cartaoCredito = this.parcelas.filter(x => x.metodo == "credit_card");
    this.cartaoCredito1x = this.cartaoCredito.find(x => x.parcelas == 1);
    this.cartaoCredito6x = this.cartaoCredito.find(x => x.parcelas == 6);

    this.cartaoCreditoPS = this.parcelas.filter(x => x.metodo == "credit_card_porto");
    this.cartaoCreditoPS1x = this.cartaoCreditoPS.find(x => x.parcelas == 1);
    this.cartaoCreditoPS6x = this.cartaoCreditoPS.find(x => x.parcelas == 6);
  }

}
