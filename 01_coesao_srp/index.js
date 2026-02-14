class CalculadoraDeSalario {
    calcula(funcionario) {
        // Se surgir um novo cargo, teremos que modificar esta classe, o que viola o princípio de responsabilidade única (SRP)
        // A calculadora depende diretamente dos cargos (DESENVOLVEDOR, DBA, TESTER).
        if (funcionario.cargo === "DESENVOLVEDOR") {
            return this.dezOuVintePorcento(funcionario);
        }
        if (funcionario.cargo === "DBA" || funcionario.cargo === "TESTER") {
            return this.quinzeOuVinteCincoPorcento(funcionario);
        }

        // if(novoCargo ...) { ... }

        // ...

        throw new Error("Funcionário inválido");
    }

    // Esses métodos são específicos para cada cargo, 
    // o que torna a classe CalculadoraDeSalario responsável por mais de uma coisa, violando o SRP.
    // A classe CalculadoraDeSalario conhece os detalhes de cada cargo.
    // Qualquer mudança na regra de desconto de um cargo exige mexer nesta classe.  
    dezOuVintePorcento(funcionario) {
        if (funcionario.salarioBase > 3000.0) {
            return funcionario.salarioBase * 0.8;
        } else {
            return funcionario.salarioBase * 0.9;
        }
    }

    quinzeOuVinteCincoPorcento(funcionario) {
        if (funcionario.salarioBase > 2000.0) {
            return funcionario.salarioBase * 0.75;
        } else {
            return funcionario.salarioBase * 0.85;
        }
    }

    // novaRegraPorcento1() { ... }

    // novaRegraPorcento2() { ... }

    // ...   
}

// Exemplo de uso:
const funcionario = { cargo: "DESENVOLVEDOR", salarioBase: 3500 };
const calculadora = new CalculadoraDeSalario();
console.log(calculadora.calcula(funcionario)); // 2800

// 1. Como podemos identificar que a classe CalculadoraDeSalario viola o princípio de responsabilidade única (SRP)?
// R: Verificar por quais motivos ela cresce.
// R: Cresce sempre que um cargo novo surgir ou sempre que uma regra de cálculo nova surgir.

// 2. Métodos como dezOuVintePorcento e quinzeOuVinteCincoPorcento possuem o mesmo esqueleto (abstração).
// R: Ambos recebem um funcionário e nos devolvem um double com o salário calculado.

// ---------- REFATORAÇÃO ----------

// Classe base para cargos
class Cargo {
    calculaSalario(salarioBase) {
        throw new Error("Método deve ser implementado na subclasse");
    }
}

// Cargos específicos
class Desenvolvedor extends Cargo {
    calculaSalario(salarioBase) {
        return salarioBase > 3000 ? salarioBase * 0.8 : salarioBase * 0.9;
    }
}

class Dba extends Cargo {
    calculaSalario(salarioBase) {
        return salarioBase > 2000 ? salarioBase * 0.75 : salarioBase * 0.85;
    }
}

class Tester extends Cargo {
    calculaSalario(salarioBase) {
        return salarioBase > 2000 ? salarioBase * 0.75 : salarioBase * 0.85;
    }
}

// Mapeamento de cargos para regras
// Fica explicito quais cargos existem e onde precisamos mexer para adicionar um novo cargo.
const RegrasPorCargo = {
    DESENVOLVEDOR: new Desenvolvedor(),
    DBA: new Dba(),
    TESTER: new Tester(),
};

class CalculadoraDeSalario {
    // Um novo cargo ou regra não alterará esta classe, o que respeita o princípio de responsabilidade única (SRP).
    calcula(funcionario) {
        const regra = RegrasPorCargo[funcionario.cargo];
        if (!regra) {
            throw new Error("Funcionário inválido");
        }
        return regra.calculaSalario(funcionario.salarioBase);
    }
}

// Exemplo de uso:
const funcionario = { cargo: "DESENVOLVEDOR", salarioBase: 3500 };
const calculadora = new CalculadoraDeSalario();
console.log(calculadora.calcula(funcionario)); // 2800