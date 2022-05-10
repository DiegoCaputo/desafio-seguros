import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { MatDialog } from '@angular/material/dialog';

import { BloqueioCoberturaComponent } from '../componentes/bloqueio-cobertura/bloqueio-cobertura.component';

import {
  OfertaQuestaoModel, OfertaResidencialModel,
  CoberturaModel,
  SimulacaoModel, SimulacaoResponseModel
} from './models';
import { RespostaQuestaoModel } from '../componentes/questoes/models';

import { SeguroResidencialService } from '../service';
import { CotacaoUtil } from '../utilitarios/cotacaoUtil'

@Component({
  selector: 'app-cotacao',
  templateUrl: './cotacao.component.html',
  styleUrls: ['./cotacao.component.css']
})
export class CotacaoComponent implements OnInit {

  oferta: OfertaResidencialModel;
  questoes: OfertaQuestaoModel[];

  tabAtiva: number;
  tab2Ativa: boolean;
  tab3Ativa: boolean;
  tab4Ativa: boolean;

  habilitaBtnSimulacao: boolean;

  respostasQuestao: RespostaQuestaoModel[];
  coberturasSelecionadas: CoberturaModel[];
  formularioDadosPessoais: FormGroup;

  questoesBloqueio: string[];

  simulacaoResponse: SimulacaoResponseModel;

  constructor(private srService: SeguroResidencialService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getOfertasResidencial();
    this.tabAtiva = 0;
    this.habilitaBtnSimulacao = false;
    this.questoesBloqueio = ["desocupado", "madeira", "chácaras, sítios ou fazendas"];
  }

  /**
   * Método usado para consistir as coberturas selecionadas
   */
  selecaoCoberturas() {
    let index = this.respostasQuestao.findIndex(x => this.questoesBloqueio.includes(x.texto_resposta));

    if (index > -1) {
      this.abrirBoqueio();
    } else {
      this.ativarTab(1);
    }
  }

  /**
   * Método usado para ativar as tabs conforme o botão que é clicado
   */
  ativarTab(tab: number) {
    this.tabAtiva = tab;

    if (tab == 1) {
      this.tab2Ativa = true;
      this.tab3Ativa = true;
    } else if (tab == 4) {
      this.tab4Ativa = true;
    }
  }

  /**
   * Método que mostra o componente de bloqueio,
   * usado para as coberturas não inclusas no seguro
   */
  abrirBoqueio() {
    this.dialog.open(BloqueioCoberturaComponent, {
      width: "500px"
    });
  }

  /**
   * Método que calcula a simulação do seguro
   * esse método não reflete as coberturas selecionadas 
   * mostra sempre os valores que estão no arquivo .json que foi enviado
   */
  calcularSeguro() {
    let simulacao = CotacaoUtil.MontarCotacao(this.oferta, this.respostasQuestao, this.formularioDadosPessoais, this.coberturasSelecionadas);
    this.enviarSimulacao(simulacao);
  }

  /**
   * Método que busca as ofertas na api
   */
  getOfertasResidencial(): any {
    this.srService.getOfertasResidencial().subscribe({
      next: (oferta) => {
        this.oferta = oferta;
        this.srService.getOfertaQuestoes(Number(this.oferta.id_oferta)).subscribe({
          next: (questoes) => {
            this.questoes = questoes;
          },
          error: (error) => console.log(error)
        });
      },
      error: (error) => console.log(error)
    });
  }


  /**
   * Envia a simulação
   * @param simulacao
   */
  enviarSimulacao(simulacao: SimulacaoModel) {
    this.srService.enviarSimulacao(simulacao).subscribe(() => {
      this.srService.getSimulacao().subscribe((simulacao) => {

        this.simulacaoResponse = simulacao;

        /**
         * Busca as informações das coberturas que não vem no response,
         * utilizado para mostrar o resultado da cotação
         */
        this.simulacaoResponse.produtos.forEach(p => {
          p.coberturas.forEach((c, index) => {
            let cobertura = this.oferta.produtos[0].coberturas.find(x => x.identificador == c.identificador);
            if (cobertura) {
              c.descricao = cobertura.descricao;
              c.nome = cobertura.nome;
              c.resumo = cobertura.resumo;
              c.cobertura_obrigatoria = cobertura.cobertura_obrigatoria;
            }
          });
        });

        this.abrirSimulacao();
      });
    });
  }

  /**
   * Abre a tab de simulação
   */
  abrirSimulacao() {
    this.ativarTab(4);
  }

  /**
   * Método que capta o evento emitido pelo componente filho com as respostas
   * @param respostasQuestao
   */
  getQuestaoResposta(respostasQuestao: any) {
    this.respostasQuestao = respostasQuestao;
  }

  /**
   * Método que capta o evento emitido pelo componente filho com as coberturas selecionadas
   * @param coberturasSelecionadas
   */
  getCoberturasSelecionadas(coberturasSelecionadas: any) {
    this.coberturasSelecionadas = coberturasSelecionadas;
  }

  /**
   * Mátodo que capta o evento emitido pelo componente filho com o formulário dos dados
   * @param formularioDadosPessoais 
   */
  getFormularioDadosPessoais(formularioDadosPessoais: any) {
    this.formularioDadosPessoais = formularioDadosPessoais;
    this.habilitaBtnSimulacao = this.formularioDadosPessoais.valid;
  }
}
