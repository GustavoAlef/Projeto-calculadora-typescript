import DataHora from "./DataHora.js";
import Operacao from "./Operacao.js";
import Tela from "./Tela.js";
export default class calculadoraControle {
    tela;
    op;
    constructor(tela = new Tela(), op = new Operacao({
        onCalculado: (resultado) => (this.tela.conteudo = resultado),
    })) {
        this.tela = tela;
        this.op = op;
        new DataHora();
        this.eventosBotoes();
    }
    eventosBotoes() {
        document.querySelectorAll("#teclado button").forEach((elemento) => {
            elemento.addEventListener("click", (evento) => {
                const target = evento.target;
                switch (target.id) {
                    case "zero":
                    case "um":
                    case "dois":
                    case "tres":
                    case "quatro":
                    case "cinco":
                    case "seis":
                    case "sete":
                    case "oito":
                    case "nove":
                        this.adicionarNumero(Number(target.dataset.valor));
                        break;
                    case "adicao":
                    case "subtracao":
                    case "multiplicacao":
                    case "divisao":
                        this.adicionarOperador(target.dataset.valor);
                        break;
                    case "ponto":
                        break;
                    case "limpar":
                        break;
                    case "desfazer":
                        break;
                    case "porcentagem":
                        break;
                    case "igual":
                        this.calcular();
                        break;
                }
            });
        });
    }
    calcular() {
        this.op.calcularOperacao();
    }
    adicionarOperacao(valor) {
        this.op.adicionar(valor);
    }
    adicionarNumero(numero) {
        if (isNaN(Number(this.op.ultimaPosicao))) {
            this.adicionarOperacao(numero.toString());
        }
        else {
            numero = Number(this.op.ultimaPosicao.toString() + numero.toString());
            this.op.ultimaPosicao = numero.toString();
        }
        this.tela.conteudo = numero.toString();
    }
    adicionarOperador(operador) {
        if (isNaN(Number(this.op.ultimaPosicao))) {
            this.op.ultimaPosicao = operador;
        }
        else {
            if (!this.op.length) {
                this.adicionarOperacao("0");
            }
            this.adicionarOperacao(operador);
        }
    }
}
//# sourceMappingURL=CalculadoraControle.js.map