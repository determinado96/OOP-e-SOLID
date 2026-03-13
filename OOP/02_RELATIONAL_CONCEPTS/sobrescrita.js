/**
 * =========================================================
 * CONCEITO: POLIMORFISMO POR SOBRESCRITA DE MÉTODO
 * =========================================================
 *
 * Polimorfismo ocorre quando diferentes classes
 * respondem ao mesmo método de maneiras diferentes.
 *
 * Neste exemplo:
 * - A classe base define um comportamento genérico.
 * - A subclasse sobrescreve esse comportamento
 *   com uma implementação específica.
 */


/**
 * =========================================================
 * CLASSE BASE: Animal
 * =========================================================
 *
 * Representa um animal genérico.
 * Define um comportamento padrão para emitir som.
 */

class Animal {

  falar() {
    console.log("O animal faz um som.");
  }

}


/**
 * =========================================================
 * SUBCLASSE: Cachorro
 * =========================================================
 *
 * Especialização da classe Animal.
 *
 * Sobrescreve o método falar() para representar
 * o comportamento específico do cachorro.
 */

class Cachorro extends Animal {

  /**
   * Sobrescrita do método falar()
   */
  falar() {
    console.log("O cachorro late.");
  }

}


/**
 * =========================================================
 * EXEMPLO DE USO
 * =========================================================
 */


// Instância da classe base
const animal = new Animal();

animal.falar();

// Saída:
// O animal faz um som.



// Instância da subclasse
const dog = new Cachorro();

dog.falar();

// Saída:
// O cachorro late.