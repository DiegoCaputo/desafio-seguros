interface IOfertaQuestao {
    id_questao: string,
    texto_questao: string,
    respostas: IResposta[]
}

interface IResposta {
    id_resposta: number,
    texto_resposta: string
}

export class OfertaQuestaoModel implements IOfertaQuestao {
    id_questao: string
    texto_questao: string
    respostas: IResposta[]
}