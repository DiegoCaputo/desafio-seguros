/**
 * Componente usado para mostras as vantagens na home
 */
import { Component, Input, OnInit } from '@angular/core';

import { VantagemModel } from './models/Vantagem.model';

@Component({
  selector: 'app-vantagens',
  templateUrl: './vantagens.component.html',
  styleUrls: ['./vantagens.component.css']
})
export class VantagensComponent implements OnInit {

  vantagens!: VantagemModel[];

  constructor() { }

  ngOnInit(): void {
    this.vantagens = [
      {
        titulo: "reparos de eletrodomésticos",
        descricao: "a geladeira quebrou ou o freezer parou de funcionar? Mandamos um técnico para te ajudar.",
        imagem: "../../../assets/imagens/geladeira_eletrodomesticos.png"
      }, {
        titulo: "serviços de encanador",
        descricao: "rolou aquele vazamento? Sem estresse, temos o serviço de encanador para você.",
        imagem: "../../../assets/imagens/assistencia_residencial.png"
      }, {
        titulo: "chaveiro",
        descricao: "perdeu suas chaves? A assistência manda um chaveiro até você.",
        imagem: "../../../assets/imagens/chave.png"
      }
    ];
  }

}
