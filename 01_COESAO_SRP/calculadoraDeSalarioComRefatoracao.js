/**
 * =========================================================
 * REFATORAÇÃO
 * =========================================================
 * Objetivo:
 *
 * - Isolar regras de cálculo em classes específicas
 * - Reduzir acoplamento
 * - Permitir extensão sem modificar código existente
 */


/**
 * Classe base que representa uma regra de cálculo de salário
 */
class Cargo {

  /**
   * Método que deve ser implementado pelas subclasses
   */
  calculaSalario(salarioBase) {
    throw new Error("Método deve ser implementado pela subclasse");
  }
}


/**
 * Regra de cálculo para Desenvolvedor
 */
class Desenvolvedor extends Cargo {

  calculaSalario(salarioBase) {
    return salarioBase > 3000
      ? salarioBase * 0.8
      : salarioBase * 0.9;
  }
}


/**
 * Regra de cálculo para DBA
 */
class Dba extends Cargo {

  calculaSalario(salarioBase) {
    return salarioBase > 2000
      ? salarioBase * 0.75
      : salarioBase * 0.85;
  }
}


/**
 * Regra de cálculo para Tester
 */
class Tester extends Cargo {

  calculaSalario(salarioBase) {
    return salarioBase > 2000
      ? salarioBase * 0.75
      : salarioBase * 0.85;
  }
}


/**
 * Mapeamento entre cargos e suas respectivas regras
 *
 * Vantagem:
 * - Fica explícito quais cargos existem
 * - Para adicionar um novo cargo basta incluir aqui
 */
const RegrasPorCargo = {
  DESENVOLVEDOR: new Desenvolvedor(),
  DBA: new Dba(),
  TESTER: new Tester()
};


/**
 * Classe responsável apenas por delegar o cálculo
 */
class CalculadoraDeSalarioRefatorada {

  /**
   * Calcula o salário final delegando a regra para o cargo
   */
  calcula(funcionario) {

    const regra = RegrasPorCargo[funcionario.cargo];

    if (!regra) {
      throw new Error("Funcionário inválido");
    }

    return regra.calculaSalario(funcionario.salarioBase);
  }
}


/**
 * Exemplo de uso da versão refatorada
 */
const funcionario2 = {
  cargo: "DESENVOLVEDOR",
  salarioBase: 3500
};

const calculadora2 = new CalculadoraDeSalarioRefatorada();

console.log(calculadora2.calcula(funcionario2)); // 2800