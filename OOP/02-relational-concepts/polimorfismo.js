// Classe base
class Medico {
  operar() {
    throw new Error("Método operar() deve ser implementado pelas subclasses");
  }
}

// Subclasses
class Anestesista extends Medico {
  operar() {
    console.log("Anestesista aplicando anestesia.");
  }
}

class Obstetra extends Medico {
  operar() {
    console.log("Obstetra realizando o parto.");
  }
}

class Pediatra extends Medico {
  operar() {
    console.log("Pediatra avaliando o recém-nascido.");
  }
}

// Classe Procedimento
class Procedimento {
  executar() {
    console.log("Executando procedimento...");
  }
}

// Classe Parto herdando de Procedimento
class Parto extends Procedimento {
  constructor() {
    super();
    this.medicos = [
      new Anestesista(),
      new Obstetra(),
      new Pediatra()
    ];
  }

  realizarParto() {
    console.log("Iniciando parto...\n");

    for (let medico of this.medicos) {
      medico.operar(); // POLIMORFISMO acontecendo aqui
    }

    console.log("\nParto finalizado.");
  }
}

// Execução
const parto = new Parto();
parto.realizarParto();