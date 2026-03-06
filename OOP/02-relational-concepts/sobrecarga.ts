class AreaCalculator {
  // Assinaturas (overloads)
  calcular(lado: number): number;
  calcular(base: number, altura: number): number;

  // Implementação
  calcular(a: number, b?: number): number {
    if (b !== undefined) {
      // Retângulo
      return a * b;
    }

    // Quadrado
    return a * a;
  }
}

const calc = new AreaCalculator();

console.log(calc.calcular(5));      // 25 (quadrado)
console.log(calc.calcular(5, 4));   // 20 (retângulo)