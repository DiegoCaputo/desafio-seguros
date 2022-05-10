import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule, IConfig } from 'ngx-mask'

import { MatRadioModule } from '@angular/material/radio';
import { MatGridListModule } from '@angular/material/grid-list'
import { MatTabsModule } from '@angular/material/tabs'
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card'
import { MatCheckboxModule } from '@angular/material/checkbox'
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule  } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatSelectModule } from '@angular/material/select'

import { DadosPessoaisService } from './componentes/dados-pessoais/service/dados-pessoais.service';
import { SeguroResidencialService } from './service';

import { HomeComponent } from './home/home.component';
import { QuestoesComponent } from './componentes/questoes';
import { VantagensComponent } from './componentes/vantagens/vantagens.component';
import { CotacaoComponent } from './cotacao/cotacao.component';
import { CoberturasComponent } from './componentes/coberturas/coberturas.component';
import { DetalheCoberturaComponent } from './componentes/detalhe-cobertura/detalhe-cobertura.component';
import { DadosPessoaisComponent } from './componentes/dados-pessoais/dados-pessoais.component';
import { BloqueioCoberturaComponent } from './componentes/bloqueio-cobertura/bloqueio-cobertura.component';
import { SimulacaoSeguroComponent } from './componentes/simulacao-seguro/simulacao-seguro.component';
import { CoberturaSimulacaoComponent } from './componentes/cobertura-simulacao/cobertura-simulacao.component';
import { ParcelaSimulacaoComponent } from './componentes/parcela-simulacao/parcela-simulacao.component';

const maskConfig: Partial<IConfig> = {
  validation: false,
};

@NgModule({
  declarations: [
    HomeComponent,
    QuestoesComponent,
    VantagensComponent,
    CotacaoComponent,
    CoberturasComponent,
    DetalheCoberturaComponent,
    DadosPessoaisComponent,
    BloqueioCoberturaComponent,
    SimulacaoSeguroComponent,
    CoberturaSimulacaoComponent,
    ParcelaSimulacaoComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(maskConfig),
    MatRadioModule,
    MatGridListModule,
    MatTabsModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule
  ], providers: [
    SeguroResidencialService,
    DadosPessoaisService
  ]
})
export class SeguroResidencialModule { }
