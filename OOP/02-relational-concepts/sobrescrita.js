class Animal {
  falar() {
    console.log("O animal faz um som.");
  }
}

class Cachorro extends Animal {
  // Sobrescrita do método falar()
  falar() {
    console.log("O cachorro late.");
  }
}

const animal = new Animal();
animal.falar(); 
// O animal faz um som.

const dog = new Cachorro();
dog.falar(); 
// O cachorro late.