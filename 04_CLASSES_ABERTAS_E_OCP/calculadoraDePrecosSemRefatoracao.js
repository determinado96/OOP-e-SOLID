/**
 * =========================================================
 * IMPLEMENTAÇÃO INICIAL
 * =========================================================
 *
 * Problema:
 * A classe CalculadoraDePrecos instancia diretamente
 * suas dependências internas:
 *
 * - TabelaDePrecoPadrao
 * - Frete
 *
 * Consequências:
 * - Alto acoplamento entre as classes
 * - Dificuldade de extensão
 * - Violação do Dependency Inversion Principle (DIP)
 *
 * A classe passa a depender de implementações concretas
 * em vez de depender de abstrações.
 */


/**
 * =========================================================
 * CLASSE: TabelaDePrecoPadrao
 * =========================================================
 *
 * Representa a regra padrão de desconto aplicada
 * sobre o valor de uma compra.
 */

class TabelaDePrecoPadrao {

  descontoPara(valor) {
    if (valor > 5000) return 0.03;
    if (valor > 1000) return 0.05;
    return 0;
  }
}


/**
 * =========================================================
 * CLASSE: Frete
 * =========================================================
 *
 * Responsável por calcular o valor do frete com base
 * na cidade de destino.
 */

class Frete {

  para(cidade) {
    if (cidade.toUpperCase() === "SAO PAULO") return 15;

    return 30;
  }

  /**
   * Possíveis novas regras de negócio:
   *
   * if (REGRA_2) { ... }
   * if (REGRA_3) { ... }
   * if (REGRA_4) { ... }
   *
   * O crescimento dessas regras pode tornar a classe
   * mais complexa e difícil de manter.
   */

}


/**
 * =========================================================
 * CLASSE PRINCIPAL: CalculadoraDePrecos
 * =========================================================
 *
 * Responsável por calcular o preço final de uma compra.
 *
 * Problema:
 * As dependências são criadas diretamente dentro da classe.
 *
 * Consequências:
 * - Não é possível trocar as implementações em tempo de execução
 * - Testes ficam mais difíceis
 * - Forte acoplamento entre as classes
 */

class CalculadoraDePrecos {

  calcula(compra) {

    // Dependências criadas internamente
    const tabela = new TabelaDePrecoPadrao();
    const frete = new Frete();

    const desconto = tabela.descontoPara(compra.valor);
    const valorFrete = frete.para(compra.cidade);

    return compra.valor * (1 - desconto) + valorFrete;
  }
}


/**
 * =========================================================
 * EXEMPLO DE USO
 * =========================================================
 */

const compra = {
  valor: 2000,
  cidade: "São Paulo"
};

const calculadora = new CalculadoraDePrecos();

const precoFinal = calculadora.calcula(compra);

console.log("Preço final:", precoFinal);