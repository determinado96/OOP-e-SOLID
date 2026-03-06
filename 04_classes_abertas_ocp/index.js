// Classe que representa a tabela de preços
class TabelaDePrecoPadrao {
  descontoPara(valor) {
    if (valor > 5000) return 0.03;
    if (valor > 1000) return 0.05;
    return 0;
  }
}

// Classe que representa o cálculo do frete
class Frete {
  para(cidade) {
    if (cidade.toUpperCase() === "SAO PAULO") return 15;
    return 30;
  }
  // Diferentes regras de negócio
  // if(REGRA 2) { ... }
  // if(REGRA 3) { ...}
  // if(REGRA 4) { ...}

}

// Classe que calcula o preço final
class CalculadoraDePrecos {
  calcula(compra) {
    const tabela = new TabelaDePrecoPadrao();
    const frete = new Frete();

    const desconto = tabela.descontoPara(compra.valor);
    const valorFrete = frete.para(compra.cidade);

    return compra.valor * (1 - desconto) + valorFrete;
  }
}

// Exemplo de uso
const compra = { valor: 2000, cidade: "São Paulo" };
const calculadora = new CalculadoraDePrecos();

const precoFinal = calculadora.calcula(compra);
console.log("Preço final:", precoFinal);