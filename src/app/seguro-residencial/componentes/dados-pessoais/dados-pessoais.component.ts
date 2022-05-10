/**
 * Componente usado para mostrar o formulário dos dados pessoais
 */
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DadosPessoaisService } from './service/dados-pessoais.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { EstadoModel, EnderecoModel } from './models';

@Component({
  selector: 'app-dados-pessoais',
  templateUrl: './dados-pessoais.component.html',
  styleUrls: ['./dados-pessoais.component.css']
})
export class DadosPessoaisComponent implements OnInit {

  @Output() formGroupEmitter = new EventEmitter<FormGroup>();

  endereco: EnderecoModel;
  estados: EstadoModel[];
  cep: string;

  form: FormGroup = new FormGroup({
    nome: new FormControl("", [Validators.required]),
    cpf: new FormControl("", [Validators.required]),
    datanascimento: new FormControl("", [Validators.required]),
    cep: new FormControl("", [Validators.required]),
    endereco: new FormControl("", [Validators.required]),
    numero: new FormControl("", [Validators.required]),
    complemento: new FormControl(""),
    bairro: new FormControl("", [Validators.required]),
    cidade: new FormControl("", [Validators.required]),
    estado: new FormControl("", [Validators.required])
  });

  constructor(private dpService: DadosPessoaisService) { }

  ngOnInit(): void {
    this.endereco = new EnderecoModel();
    this.getEstados();

    this.form.valueChanges.subscribe(() => {
      this.formGroupEmitter.emit(this.form);
    });
  }

  getEndereco(el: any) {
    this.dpService.getEndereco(el.target.value).subscribe({
      next: (endereco) => { this.endereco = endereco },
      error: (error) => console.log(error)
    });
  }

  getEstados() {
    this.dpService.getEstados().subscribe({
      next: (estados) => { this.estados = estados },
      error: (error) => console.log(error)
    });
  }
}
