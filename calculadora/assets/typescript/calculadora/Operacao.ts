interface OperacaoOpcoes {
  onCalculado: any;
}

export default class Operacao {
  private onCalculado: any;

  constructor(opts: OperacaoOpcoes, private operacao: string[] = []) {
    this.onCalculado = opts.onCalculado;
  }

  adicionar(valor: string): number {
    //verifica se a operacao contem 3 fatores para realiza-la
    if (this.operacao.length === 3) {
      this.calcularOperacao();
    }

    this.operacao.push(valor);

    console.log(this.operacao);

    return this.length;
  }

  obterResultado(): string {
    let resultado: string = "0";

    try {
      resultado = eval(this.operacao.join("")).toString();
    } catch (error) {
      resultado = "ERRO";
    }

    return resultado;
  }

  calcularOperacao(): void {
    let resultadoOp = this.obterResultado();

    if (resultadoOp.length > 12) {
      resultadoOp = resultadoOp.substring(0, 12);
    }

    //'reseta' o array para o resultado da ultima operacao feita seja a 1 posicao
    this.operacao = [resultadoOp];

    this.onCalculado(resultadoOp);
  }

  set ultimaPosicao(valor: string) {
    const ultimoIndex = this.operacao.length ? this.operacao.length - 1 : 0;

    this.operacao[ultimoIndex] = valor;
  }

  get ultimaPosicao(): string {
    return this.operacao.length ? this.operacao[this.operacao.length - 1] : "0";
  }

  get length(): number {
    return this.operacao.length;
  }
}
