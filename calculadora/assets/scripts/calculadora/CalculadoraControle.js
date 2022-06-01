import DataHora from "./DataHora.js";
import Tela from "./Tela.js";
export default class calculadoraControle {
    tela;
    constructor(tela = new Tela()) {
        this.tela = tela;
        new DataHora();
        this.tela.conteudo = "1.5";
    }
}
//# sourceMappingURL=CalculadoraControle.js.map