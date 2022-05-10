/**
 * Componente usado para mostrar as coberturas disponíveis para seleção
 */
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';

import { DetalheCoberturaComponent } from '../detalhe-cobertura';
import { CoberturaModel, OfertaResidencialModel } from '../../cotacao/models/OfertaResidencial.model';
import { CoberturaSelecionadaModel } from './models/CoberturaSelecionada.model';

@Component({
  selector: 'app-coberturas',
  templateUrl: './coberturas.component.html',
  styleUrls: ['./coberturas.component.css']
})
export class CoberturasComponent implements OnInit {

  @Input() oferta: OfertaResidencialModel;
  @Output() coberturasSelecionadasEmitter = new EventEmitter<CoberturaSelecionadaModel[]>();

  coberturasSelecionadas: CoberturaModel[];
  coberturas: CoberturaModel[];
  coberturasDepend: CoberturaModel[];

  constructor(private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.coberturasSelecionadas = new Array<CoberturaModel>();
  }

  ngOnChanges() {
    if (this.oferta) {
      this.oferta.produtos.forEach(a => {
        this.coberturasSelecionadas = a.coberturas.filter(x => x.cobertura_obrigatoria == true);
        this.coberturas = a.coberturas.filter(x => x.dependencias.length == 0);
        this.coberturasDepend = a.coberturas.filter(x => x.dependencias.length > 0);
      });
      this.coberturasSelecionadasEmitter.emit(this.coberturasSelecionadas);
    }
  }

  /**
   * Método que controla a seleção das coberturas
   * @param cobertura
   */
  selecionarCobertura(cobertura: CoberturaModel) {
    let index = this.coberturasSelecionadas.findIndex(x => x.id_cobertura == cobertura.id_cobertura)
    if (index > -1) {
      this.coberturasSelecionadas.splice(index, 1);
      this.retirarDependentes(cobertura.identificador);
    } else {
      this.coberturasSelecionadas.push(cobertura);
      this.mostrarDependentes(cobertura.identificador);
    }

    this.coberturasSelecionadasEmitter.emit(this.coberturasSelecionadas);
  }

  /**
   * Método que abre a dialog com os detalhes da cobertura
   * @param cobertura
   */
  abrirDetalhes(cobertura: CoberturaModel) {
    this.dialog.open(DetalheCoberturaComponent, {
      width: "500px",
      data: cobertura
    });
  }

  /**
   * Método que controla e mostra as coberturas dependentes
   * @param identificador
   */
  mostrarDependentes(identificador: string) {
    let coberturaDepend = this.coberturasDepend.find(c => c.dependencias.find(d => d == identificador));

    if (coberturaDepend)
      if (coberturaDepend.dependencias.length == 1) {
        this.coberturas.push(coberturaDepend);
      } else {

        let qtdDependencias = coberturaDepend.dependencias.length;

        coberturaDepend.dependencias.forEach(x => {
          let index = this.coberturasSelecionadas.findIndex(c => c.identificador == x);
          if (index > 0) {
            qtdDependencias--;
          }
        });

        if (qtdDependencias == 0)
          this.coberturas.push(coberturaDepend);
      }
  }

  /**
   * Método que controla e retira as coberturas dependentes
   * @param identificador
   */
  retirarDependentes(identificador: string) {
    let index = this.coberturas.findIndex(c => c.dependencias.find(d => d == identificador));
    if (index > 0) {
      this.coberturas.splice(index, 1);
    }
  }
}
