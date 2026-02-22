class Funcionario {
  constructor(nome, salario, cargo) {
    this.nome = nome;
    this.salario = salario;
    this.cargo = cargo;
  }
}

const CARGOS = {
  DESENVOLVEDOR: "DESENVOLVEDOR",
  DBA: "DBA",
  TESTER: "TESTER"
};

// Essa classe cresce por dois motivos:
// 1. Sempre que um novo cargo surir
// 2. Sempre que uma nova regra de negócio surgir
class CalculadoraDeSalario {
  calcula(funcionario) {
    if (funcionario.cargo === CARGOS.DESENVOLVEDOR) {
      return this.dezOuVintePorcento(funcionario);
    }

    if (
      funcionario.cargo === CARGOS.DBA ||
      funcionario.cargo === CARGOS.TESTER
    ) {
      return this.quinzeOuVinteCincoPorcento(funcionario);
    }

    // Número de if pode crescer muito, o que torna a classe difícil de manter

    throw new Error("Funcionário inválido");
  }

  dezOuVintePorcento(funcionario) {
    if (funcionario.salario > 3000) {
      return funcionario.salario * 0.8;
    }
    return funcionario.salario * 0.9;
  }

  quinzeOuVinteCincoPorcento(funcionario) {
    if (funcionario.salario > 2000) {
      return funcionario.salario * 0.75;
    }
    return funcionario.salario * 0.85;
  }
}

// -----

// Os métodos dezOuVintePorcento e quinzeOuVinteCincoPorcento possuem a mesma abstração (recebem um funcionrio e retornam um double)
// Podemos criar uma interface para isso

class RegraDeCalculo {
  calcula(funcionario) {
    throw new Error("Método calcula() deve ser implementado");
  }
}

// Cada regra de cálculo é uma classe diferente, que implementa a interface RegraDeCalculo com apenas uma responsabilidade
// São testadas isoladamente
// Para reutilizar a regra de cálculo, basta instanciar a classe e passar para o funcionário
class DezOuVintePorCento extends RegraDeCalculo {
  calcula(funcionario) {
    if (funcionario.salarioBase > 3000) {
      return funcionario.salarioBase * 0.8;
    }
    return funcionario.salarioBase * 0.9;
  }
}

class QuinzeOuVinteCincoPorCento extends RegraDeCalculo {
  calcula(funcionario) {
    if (funcionario.salarioBase > 2000) {
      return funcionario.salarioBase * 0.75;
    }
    return funcionario.salarioBase * 0.85;
  }
}

class Funcionario {
  constructor(nome, salarioBase, cargo, regraDeCalculo) {
    this.nome = nome;
    this.salarioBase = salarioBase;
    this.cargo = cargo;
    this.regraDeCalculo = regraDeCalculo;
  }

  calculaSalario() {
    return this.regraDeCalculo.calcula(this);
  }
}

const desenvolvedor = new Funcionario(
  "Rodi",
  4000,
  "DESENVOLVEDOR",
  new DezOuVintePorCento()
);

const dba = new Funcionario(
  "Maria",
  2500,
  "DBA",
  new QuinzeOuVinteCincoPorCento()
);

const tester = new Funcionario(
  "João",
  1800,
  "TESTER",
  new QuinzeOuVinteCincoPorCento()
);

console.log("Salário Desenvolvedor:", desenvolvedor.calculaSalario());
console.log("Salário DBA:", dba.calculaSalario());
console.log("Salário Tester:", tester.calculaSalario());