import DataHora from "./DataHora.js";
import Operacao from "./Operacao.js";
import Tela from "./Tela.js";

export default class calculadoraControle {
  constructor(
    private tela = new Tela(),
    private op = new Operacao({
      onCalculado: (resultado: string) => (this.tela.conteudo = resultado),
    })
  ) {
    new DataHora();

    this.eventosBotoes();
  }

  eventosBotoes(): void {
    document.querySelectorAll("#teclado button").forEach((elemento) => {
      elemento.addEventListener("click", (evento: Event) => {
        //distinguindo os botoes apertados
        const target = evento.target as HTMLButtonElement;

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
            this.adicionarOperador(target.dataset.valor as string);
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

  calcular(): void {
    this.op.calcularOperacao();
  }

  adicionarOperacao(valor: string): void {
    this.op.adicionar(valor);
  }

  adicionarNumero(numero: number): void {
    if (isNaN(Number(this.op.ultimaPosicao))) {
      this.adicionarOperacao(numero.toString());
    } else {
      numero = Number(this.op.ultimaPosicao.toString() + numero.toString());

      this.op.ultimaPosicao = numero.toString();
    }

    this.tela.conteudo = numero.toString();
  }

  adicionarOperador(operador: string) {
    if (isNaN(Number(this.op.ultimaPosicao))) {
      this.op.ultimaPosicao = operador;
    } else {
      if (!this.op.length) {
        this.adicionarOperacao("0");
      }

      this.adicionarOperacao(operador);
    }
  }
}
