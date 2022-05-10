interface IProdutoModel {
    id_produto: string,
    coberturas: CoberturaResponseModel[],
    assistencias: IAssistenciaModel[],

}

interface IAssistenciaModel {
    nome: string;
    valor_assistencia: number;
    atendimento: string;
    uso: string;
    descricao: string;
    servicos: IServicoModel[]
}

interface IServicoModel {
    nome: string;
    tipo: string;
}

interface ICorretoraModel {
    taxa_corretagem: number;
}

interface IMetodoPagamento {
    metodo: string;
    cartoes?: ICartaoModel[];
    bancos?: IBancoModel[]; 
}

interface ICartaoModel{
    tipo: string;
}

interface IBancoModel{
    nome: string;
    codigo: string;
}

export class OpcaoPagamentoModel {
    id_opcao_pagamento: number;
    recorrencia: boolean;
    metodo: string;
    parcelas: number;
    valor_parcela: number;
    valor_total: number;
    variante: string;
    iof: number;
    iof_percentual: number;
    juros: number;
    juros_percentual: number;
}

export class CoberturaResponseModel {
    id_cobertura: string;
    importancia_segurada: number;
    valor: number;
    franquia: number;
    franquia_percentual: number;
    texto_franquia: string;
    identificador: string;
    resumo: string;
    descricao: string;
    nome: string;
    cobertura_obrigatoria: boolean;
}

export class SimulacaoResponseModel {
    id_simulacao: string;
    id_cotacao_parceiro: string;
    corretora: ICorretoraModel;
    produtos: IProdutoModel[];
    opcoes_pagamento: OpcaoPagamentoModel[];
    metodos_pagamento: IMetodoPagamento[];
}