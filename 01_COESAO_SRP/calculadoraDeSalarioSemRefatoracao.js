/**
 * =========================================================
 * IMPLEMENTAÇÃO INICIAL (ANTES DA REFATORAÇÃO)
 * =========================================================
 * Problema:
 * A classe CalculadoraDeSalario conhece todas as regras
 * de cálculo para cada cargo.
 *
 * Consequências:
 * - Violação do Single Responsibility Principle (SRP)
 * - Alto acoplamento entre calculadora e cargos
 * - Sempre que surgir um novo cargo ou regra,
 *   será necessário modificar esta classe
 */

class CalculadoraDeSalario {
  /**
   * Calcula o salário final do funcionário de acordo com o cargo
   */
  calcula(funcionario) {
    // Dependência direta dos cargos
    if (funcionario.cargo === "DESENVOLVEDOR") {
      return this.dezOuVintePorcento(funcionario);
    }

    if (funcionario.cargo === "DBA" || funcionario.cargo === "TESTER") {
      return this.quinzeOuVinteCincoPorcento(funcionario);
    }

    // Caso apareça um novo cargo, precisaríamos alterar esta classe
    // if (funcionario.cargo === "NOVO_CARGO") { ... }

    throw new Error("Funcionário inválido");
  }

  /**
   * Regra de cálculo para desenvolvedores
   * - Salário > 3000 → desconto de 20%
   * - Salário ≤ 3000 → desconto de 10%
   */
  dezOuVintePorcento(funcionario) {
    if (funcionario.salarioBase > 3000) {
      return funcionario.salarioBase * 0.8;
    }

    return funcionario.salarioBase * 0.9;
  }

  /**
   * Regra de cálculo para DBA e Tester
   * - Salário > 2000 → desconto de 25%
   * - Salário ≤ 2000 → desconto de 15%
   */
  quinzeOuVinteCincoPorcento(funcionario) {
    if (funcionario.salarioBase > 2000) {
      return funcionario.salarioBase * 0.75;
    }

    return funcionario.salarioBase * 0.85;
  }
}

/**
 * Exemplo de uso
 */
const funcionario = {
  cargo: "DESENVOLVEDOR",
  salarioBase: 3500,
};

const calculadora = new CalculadoraDeSalario();

console.log(calculadora.calcula(funcionario)); // 2800

/**
 * =========================================================
 * IDENTIFICANDO A VIOLAÇÃO DO SRP
 * =========================================================
 *
 * A classe CalculadoraDeSalario cresce por dois motivos:
 *
 * 1) Sempre que um novo cargo é criado
 * 2) Sempre que surge uma nova regra de cálculo
 *
 * Portanto ela possui múltiplas responsabilidades.
 */

/**
 * =========================================================
 * OBSERVAÇÃO SOBRE OS MÉTODOS DE CÁLCULO
 * =========================================================
 *
 * Os métodos:
 *
 * - dezOuVintePorcento()
 * - quinzeOuVinteCincoPorcento()
 *
 * possuem o mesmo "esqueleto":
 *
 * Entrada:
 *    funcionário / salário base
 *
 * Saída:
 *    salário calculado
 *
 * Ou seja, possuem a mesma abstração.
 */
