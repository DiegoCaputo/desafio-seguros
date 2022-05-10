/**
 * Componente usado para mostrar as questões
 */
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import { RespostaQuestaoModel } from './models';
import { OfertaQuestaoModel } from '../../cotacao/models/OfertaQuestao.model';

@Component({
  selector: 'app-questoes',
  templateUrl: './questoes.component.html',
  styleUrls: ['./questoes.component.css']
})
export class QuestoesComponent implements OnInit {

  @Input() questoes: OfertaQuestaoModel[];
  @Output() respostaQuestaoEmitter = new EventEmitter<RespostaQuestaoModel[]>();

  respostasQuestao: RespostaQuestaoModel[];
  questoesEscondidasInicio: string[];
  questoesEscondidas: OfertaQuestaoModel[];

  constructor() { }

  ngOnInit(): void {
    this.respostasQuestao = new Array<RespostaQuestaoModel>();
    this.questoesEscondidasInicio = ["o imóvel está em condomínio fechado?"];
  }

  ngOnChanges() {
    if (this.questoes) {
      this.questoesEscondidas = this.questoes.filter(q => this.questoesEscondidasInicio.includes(q.texto_questao.toLowerCase()));
      this.questoes = this.questoes.filter(q => !this.questoesEscondidasInicio.includes(q.texto_questao.toLowerCase()));
    }
  }

  /**
   * Método que controla a seleção das respostas
   * @param id_questao
   * @param id_resposta 
   * @param texto_resposta 
   */
  selecionarResposta(id_questao: string, id_resposta: number, texto_resposta: string) {

    let resposta = this.respostasQuestao.find(q => q.id_questao == id_questao && q.id_resposta == id_resposta);

    if (!resposta) {
      let index = this.respostasQuestao.findIndex(x => x.id_questao == id_questao);

      if (index > -1) {
        this.respostasQuestao.splice(index, 1);
      }

      this.respostasQuestao.push({ id_questao, id_resposta, texto_resposta });

      if (texto_resposta == "casa") {
        this.questoes.push(this.questoesEscondidas[0]);
      } else if (texto_resposta == "apartamento" || texto_resposta == "chácaras, sítios ou fazendas") {
        let index = this.questoes.findIndex(q => this.questoesEscondidasInicio.includes(q.texto_questao.toLowerCase()));
        if (index > 0){
          this.questoes.splice(index, 1);
          this.respostasQuestao.splice(index, 1);
        }
      }

      if (this.respostasQuestao.length == this.questoes.length)
        this.respostaQuestaoEmitter.emit(this.respostasQuestao);
    }
  }
}
