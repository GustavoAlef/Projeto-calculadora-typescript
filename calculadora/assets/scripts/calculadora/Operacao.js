export default class Operacao {
    operacao;
    onCalculado;
    constructor(opts, operacao = []) {
        this.operacao = operacao;
        this.onCalculado = opts.onCalculado;
    }
    adicionar(valor) {
        if (this.operacao.length === 3) {
            this.calcularOperacao();
        }
        this.operacao.push(valor);
        console.log(this.operacao);
        return this.length;
    }
    obterResultado() {
        let resultado = "0";
        try {
            resultado = eval(this.operacao.join("")).toString();
        }
        catch (error) {
            resultado = "ERRO";
        }
        return resultado;
    }
    calcularOperacao() {
        let resultadoOp = this.obterResultado();
        if (resultadoOp.length > 12) {
            resultadoOp = resultadoOp.substring(0, 12);
        }
        this.operacao = [resultadoOp];
        this.onCalculado(resultadoOp);
    }
    get length() {
        return this.operacao.length;
    }
}
//# sourceMappingURL=Operacao.js.map