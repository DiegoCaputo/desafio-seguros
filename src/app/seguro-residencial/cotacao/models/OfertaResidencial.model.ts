interface IOfertaModel {
    id_oferta: string;
    nome: string;
    produtos: IProduto[]
}

interface IProduto {
    id_produto: string;
    id_parceiro: string,
    nome: string,
    vigencia: IVigencia,
    importancia_base: IImportanciaBase,
    coberturas: ICobertura[],
    assistencias: IAssistencia[]
}

interface IVigencia {
    quantidade: number,
    unidade: string
}

interface IImportanciaBase {
    incremento: number,
    maximo: number,
    minimo: number,
    valor_sugerido: IValorSugerido[]
}

interface IValorSugerido {
    tipo_imovel: number,
    valor: number
}

interface ICobertura {
    id_cobertura: string,
    nome: string,
    descricao: string,
    resumo: string,
    cobertura_obrigatoria: boolean,
    identificador: string,
    importancias_segurada: IImportanciaSegurada[],
    nao_incluso: string[],
    dependencias: string[],
    ocultar_descricao: boolean
}

interface IImportanciaSegurada {
    tipo: string,
    minimo: number,
    maximo: number,
    incremento: number,
    valor_sugerido: IValorSugerido[]
}

interface IAssistencia {
    id_assistencia: string,
    nome: string,
    descricao: string,
    resumo: string,
    assistencia_obrigatoria: boolean,
    identificador: string
}

class Produto implements IProduto {
    id_produto: string;
    id_parceiro: string;
    nome: string;
    vigencia: IVigencia;
    importancia_base: IImportanciaBase;
    coberturas: ICobertura[];
    assistencias: IAssistencia[];
}

export class OfertaResidencialModel implements IOfertaModel {
    id_oferta: string;
    nome: string;
    produtos: Produto[];
}

export class CoberturaModel implements ICobertura{
    id_cobertura: string;
    nome: string;
    descricao: string;
    resumo: string;
    cobertura_obrigatoria: boolean;
    identificador: string;
    importancias_segurada: IImportanciaSegurada[];
    nao_incluso: string[];
    dependencias: string[];
    ocultar_descricao: boolean;
}