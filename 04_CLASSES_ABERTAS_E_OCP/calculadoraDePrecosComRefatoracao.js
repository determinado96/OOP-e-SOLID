
/**
 * =========================================================
 * REFATORAÇÃO
 * =========================================================
 *
 * Objetivo:
 * Reduzir o acoplamento entre CalculadoraDePrecos
 * e suas dependências.
 *
 * Estratégia:
 * Introduzir abstrações para:
 *
 * - Tabela de preço
 * - Serviço de entrega
 *
 * Dessa forma a calculadora dependerá de abstrações
 * e não de implementações concretas.
 */


/**
 * =========================================================
 * ABSTRAÇÃO: TabelaDePreco
 * =========================================================
 *
 * Define o contrato para qualquer regra de desconto.
 */

class TabelaDePreco {

  descontoPara(valor) {
    throw new Error("Método deve ser implementado");
  }

}


/**
 * =========================================================
 * ABSTRAÇÃO: ServicoDeEntrega
 * =========================================================
 *
 * Define o contrato para cálculo de frete.
 */

class ServicoDeEntrega {

  para(cidade) {
    throw new Error("Método deve ser implementado");
  }

}


/**
 * =========================================================
 * IMPLEMENTAÇÃO: TabelaDePrecoPadrao
 * =========================================================
 */

class TabelaDePrecoPadrao extends TabelaDePreco {

  descontoPara(valor) {
    if (valor > 5000) return 0.03;
    if (valor > 1000) return 0.05;
    return 0;
  }

}


/**
 * =========================================================
 * IMPLEMENTAÇÃO: TabelaDePrecoPromocional
 * =========================================================
 *
 * Exemplo de regra alternativa de desconto.
 */

class TabelaDePrecoPromocional extends TabelaDePreco {

  descontoPara(valor) {
    if (valor > 3000) return 0.10;

    return 0.02;
  }

}


/**
 * =========================================================
 * IMPLEMENTAÇÃO: FretePadrao
 * =========================================================
 */

class FretePadrao extends ServicoDeEntrega {

  para(cidade) {
    if (cidade.toUpperCase() === "SAO PAULO") return 15;

    return 30;
  }

}


/**
 * =========================================================
 * IMPLEMENTAÇÃO: FreteExpresso
 * =========================================================
 */

class FreteExpresso extends ServicoDeEntrega {

  para(cidade) {
    return 50;
  }

}


/**
 * =========================================================
 * CLASSE PRINCIPAL REFATORADA
 * =========================================================
 *
 * Agora a classe depende apenas de abstrações:
 *
 * - TabelaDePreco
 * - ServicoDeEntrega
 *
 * As implementações são fornecidas externamente
 * através do construtor (injeção de dependência).
 */

class CalculadoraDePrecos {

  constructor(tabelaDePreco, servicoDeEntrega) {

    // Receber dependências pelo construtor permite
    // trocar implementações em tempo de execução.
    this.tabela = tabelaDePreco;
    this.entrega = servicoDeEntrega;
  }

  calcula(compra) {

    const desconto = this.tabela.descontoPara(compra.valor);

    const frete = this.entrega.para(compra.cidade);

    return compra.valor * (1 - desconto) + frete;
  }

}