/**
 * Componente usado para mostrar os detalhes de uma cobertura
 */
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CoberturaModel } from '../../cotacao/models/OfertaResidencial.model';

@Component({
  selector: 'app-detalhe-cobertura',
  templateUrl: './detalhe-cobertura.component.html',
  styleUrls: ['./detalhe-cobertura.component.css']
})
export class DetalheCoberturaComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public cobertura: CoberturaModel) { }

  ngOnInit(): void { }

}
