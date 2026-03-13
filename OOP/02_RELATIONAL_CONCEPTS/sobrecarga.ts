/**
 * =========================================================
 * CONCEITO: SOBRECARGA DE MÉTODOS (METHOD OVERLOADING)
 * =========================================================
 *
 * Sobrecarga ocorre quando um mesmo método possui
 * múltiplas assinaturas, permitindo diferentes formas
 * de chamada com parâmetros distintos.
 *
 * Importante:
 * - TypeScript permite definir várias assinaturas
 *   para um método.
 * - Porém existe apenas UMA implementação real.
 *
 * A implementação precisa tratar as diferentes
 * combinações de parâmetros.
 */


/**
 * =========================================================
 * CLASSE: AreaCalculator
 * =========================================================
 *
 * Responsável por calcular áreas de diferentes formas
 * geométricas utilizando sobrecarga de método.
 */

class AreaCalculator {

  /**
   * =========================================================
   * ASSINATURAS (OVERLOADS)
   * =========================================================
   *
   * Define as diferentes formas de utilizar o método.
   */

  // Calcula área de um quadrado
  calcular(lado: number): number;

  // Calcula área de um retângulo
  calcular(base: number, altura: number): number;


  /**
   * =========================================================
   * IMPLEMENTAÇÃO DO MÉTODO
   * =========================================================
   *
   * Apenas uma implementação é permitida.
   * O método verifica quais parâmetros foram fornecidos
   * e executa o cálculo adequado.
   */

  calcular(a: number, b?: number): number {

    /**
     * Caso existam dois parâmetros,
     * calcula a área de um retângulo.
     */
    if (b !== undefined) {
      return a * b;
    }

    /**
     * Caso exista apenas um parâmetro,
     * calcula a área de um quadrado.
     */
    return a * a;
  }

}


/**
 * =========================================================
 * EXEMPLO DE USO
 * =========================================================
 */

const calc = new AreaCalculator();


// Cálculo da área de um quadrado
console.log(calc.calcular(5));

// Saída:
// 25


// Cálculo da área de um retângulo
console.log(calc.calcular(5, 4));

// Saída:
// 20