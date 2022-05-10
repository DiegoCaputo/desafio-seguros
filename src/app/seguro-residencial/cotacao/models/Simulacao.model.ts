export class ItemRiscoModel {
    imovel: ImovelModel;
}

export class ImovelModel {
    endereco: EnderecoSimulacaoModel;
}

export class EnderecoSimulacaoModel {
    bairro: string;
    cep: string;
    cidade: string;
    complemento: string;
    estado: string;
    logradouro: string;
    numero: string;
    pais: string;
}

export class OfertaModel {
    id_oferta: string;
    produtos: ProdutoModel[];
}

export class ProdutoModel {
    assistencias: AssistenciaModel[];
    coberturas: CoberturaSelecionadaModel[];
    id_produto: string;
    importancia_base: number;
}

export class AssistenciaModel {
    id_assistencia: string;
}

export class CoberturaSimulacaoModel {
    id_cobertura: string;
    importancia_segurada: number;
}

export class ProponenteModel {
    contatos: ContatoModel[];
    cpf: string;
    data_nascimento: string;
    nome: string;
}

export class ContatoModel {
    valor: string;
    tipo: string;
}

export class QuestaoModel {
    id_questao: string;
    resposta: number;
}

export class QuestaoRespondidaModel {
    id_questao: string;
    resposta: number;
}

export class CoberturaSelecionadaModel {
    id_cobertura: string;
    importancia_segurada: number;
}

export class SimulacaoModel {
    item_risco: ItemRiscoModel;
    oferta: OfertaModel;
    proponente: ProponenteModel;
    questoes: QuestaoModel[];
}
