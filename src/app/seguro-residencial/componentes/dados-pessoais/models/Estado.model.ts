interface IRegiao{
    id: number;
    sigla: string;
    nome: string;
}

export class EstadoModel{
    id: number;
    sigla: string;
    nome: string;
    regiao: IRegiao;
}