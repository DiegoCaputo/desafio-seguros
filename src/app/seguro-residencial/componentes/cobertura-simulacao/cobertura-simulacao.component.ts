/**
 * Componente usado na resposta da simulação da cotação
 */
import { Component, Input, OnInit } from '@angular/core';
import { CoberturaResponseModel, SimulacaoModel } from '../../cotacao/models';

@Component({
  selector: 'app-cobertura-simulacao',
  templateUrl: './cobertura-simulacao.component.html',
  styleUrls: ['./cobertura-simulacao.component.css']
})
export class CoberturaSimulacaoComponent implements OnInit {

  @Input() coberturas: CoberturaResponseModel[];

  constructor() { }

  ngOnInit(): void {

  }
}
