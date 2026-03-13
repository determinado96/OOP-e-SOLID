/**
 * =========================================================
 * CONCEITO: POLIMORFISMO (SOBRESCRITA DE MÉTODOS)
 * =========================================================
 *
 * Polimorfismo significa "muitas formas".
 *
 * Em orientação a objetos, ocorre quando diferentes
 * classes respondem ao mesmo método de maneiras
 * diferentes.
 *
 * Neste exemplo:
 *
 * Todas as subclasses possuem o método:
 * operar()
 *
 * Porém cada classe implementa esse método
 * de maneira específica.
 */


/**
 * =========================================================
 * CLASSE BASE: Medico
 * =========================================================
 *
 * Representa um conceito genérico de médico.
 *
 * Essa classe define um método que deve ser
 * implementado pelas subclasses.
 */

class Medico {

  /**
   * Método base que deve ser sobrescrito
   * pelas subclasses.
   */

  operar() {
    throw new Error("Método operar() deve ser implementado pelas subclasses");
  }

}


/**
 * =========================================================
 * SUBCLASSE: Anestesista
 * =========================================================
 *
 * Especialização da classe Medico.
 */

class Anestesista extends Medico {

  operar() {
    console.log("Anestesista aplicando anestesia.");
  }

}


/**
 * =========================================================
 * SUBCLASSE: Obstetra
 * =========================================================
 *
 * Especialização da classe Medico responsável
 * pelo parto.
 */

class Obstetra extends Medico {

  operar() {
    console.log("Obstetra realizando o parto.");
  }

}


/**
 * =========================================================
 * SUBCLASSE: Pediatra
 * =========================================================
 *
 * Especialização da classe Medico responsável
 * pelo cuidado do recém-nascido.
 */

class Pediatra extends Medico {

  operar() {
    console.log("Pediatra avaliando o recém-nascido.");
  }

}


/**
 * =========================================================
 * CLASSE: Procedimento
 * =========================================================
 *
 * Representa um procedimento médico genérico.
 */

class Procedimento {

  executar() {
    console.log("Executando procedimento...");
  }

}


/**
 * =========================================================
 * CLASSE: Parto
 * =========================================================
 *
 * Especialização de Procedimento.
 *
 * Representa um procedimento de parto que envolve
 * diferentes médicos.
 */

class Parto extends Procedimento {

  constructor() {

    super();

    /**
     * Coleção de médicos envolvidos no parto.
     *
     * Todos são do tipo Medico, mas cada um possui
     * comportamento específico para o método operar().
     */

    this.medicos = [
      new Anestesista(),
      new Obstetra(),
      new Pediatra()
    ];
  }

  /**
   * Executa o parto chamando o método operar()
   * de cada médico.
   */

  realizarParto() {

    console.log("Iniciando parto...\n");

    /**
     * POLIMORFISMO
     *
     * A variável medico é do tipo Medico,
     * porém o comportamento executado depende
     * da implementação concreta da subclasse.
     */

    for (let medico of this.medicos) {
      medico.operar();
    }

    console.log("\nParto finalizado.");
  }

}


/**
 * =========================================================
 * EXECUÇÃO DO PROGRAMA
 * =========================================================
 */

const parto = new Parto();

parto.realizarParto();