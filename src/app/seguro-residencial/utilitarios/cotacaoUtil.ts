import { FormGroup } from "@angular/forms";
import { RespostaQuestaoModel } from "../componentes/questoes/models";
import { CoberturaModel, CoberturaSimulacaoModel, ContatoModel, EnderecoSimulacaoModel, ImovelModel, ItemRiscoModel, OfertaModel, OfertaResidencialModel, ProdutoModel, ProponenteModel, QuestaoRespondidaModel, SimulacaoModel } from "../cotacao/models";

export class CotacaoUtil {

  public static MontarCotacao(oferta: OfertaResidencialModel,
    respostasQuestao: RespostaQuestaoModel[],
    formDadosPessoais: FormGroup,
    coberturasSelecionadas: CoberturaModel[]) {

    let simulacao: SimulacaoModel = new SimulacaoModel();
    simulacao.oferta = new OfertaModel();
    simulacao.oferta.produtos = new Array<ProdutoModel>();
    simulacao.item_risco = new ItemRiscoModel();
    simulacao.item_risco.imovel = new ImovelModel();
    simulacao.item_risco.imovel.endereco = new EnderecoSimulacaoModel();
    simulacao.proponente = new ProponenteModel();
    simulacao.proponente.contatos = new Array<ContatoModel>();
    simulacao.questoes = new Array<QuestaoRespondidaModel>();

    oferta.produtos.forEach(p => {
        let produto = new ProdutoModel();
        produto.id_produto = p.id_produto;
        produto.importancia_base = 0;
        produto.assistencias = [];

        produto.coberturas = new Array<CoberturaSimulacaoModel>();

        coberturasSelecionadas.forEach(c => {
            produto.coberturas.push({
                id_cobertura: c.id_cobertura,
                importancia_segurada: c.importancias_segurada[0].valor_sugerido[0].valor
            });
        });

        simulacao.oferta.produtos.push(produto)
    });

    simulacao.item_risco.imovel.endereco.bairro = formDadosPessoais.controls["bairro"].value;
    simulacao.item_risco.imovel.endereco.cep = formDadosPessoais.controls["cep"].value;
    simulacao.item_risco.imovel.endereco.cidade = formDadosPessoais.controls["cidade"].value;
    simulacao.item_risco.imovel.endereco.complemento = formDadosPessoais.controls["complemento"].value;
    simulacao.item_risco.imovel.endereco.estado = formDadosPessoais.controls["estado"].value;
    simulacao.item_risco.imovel.endereco.logradouro = formDadosPessoais.controls["endereco"].value;
    simulacao.item_risco.imovel.endereco.numero = formDadosPessoais.controls["numero"].value;
    simulacao.item_risco.imovel.endereco.pais = "BRA";

    simulacao.proponente.contatos.push({
        valor: "",
        tipo: "email"
    }, {
        valor: "",
        tipo: "telefone"
    });

    simulacao.proponente.cpf = formDadosPessoais.controls["cpf"].value;
    simulacao.proponente.data_nascimento = this.formatarData(formDadosPessoais.controls["datanascimento"].value);
    simulacao.proponente.nome = formDadosPessoais.controls["nome"].value;

    respostasQuestao.forEach(q => {
        simulacao.questoes.push({
            id_questao: q.id_questao,
            resposta: q.id_resposta
        });
    });

    return simulacao;
}

public static formatarData(data: string) {
    let dia = data.substring(0, 2);
    let mes = data.substring(2, 4);
    let ano = data.substring(4, 8);

    return `${ano}-${mes}-${dia}`;
}
}