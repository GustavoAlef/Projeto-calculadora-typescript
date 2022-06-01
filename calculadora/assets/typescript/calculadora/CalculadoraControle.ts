import DataHora from "./DataHora.js";
import Tela from "./Tela.js";

export default class calculadoraControle {
  constructor(private tela = new Tela()) {
    new DataHora();

    this.tela.conteudo = "1.5";
  }
}
