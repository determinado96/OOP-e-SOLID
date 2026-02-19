class Personagem {
    constructor(nome, cor, quantidadeDeCogumelos, altura, tipoFisico, possuiBigode) {
        this.nome = nome;
        this.cor = cor;
        this.quantidadeDeCogumelos = quantidadeDeCogumelos;
        this.altura = altura;
        this.tipoFisico = tipoFisico;
        this.possuiBigode = possuiBigode;
    }

    get nome() {
        return this.nome;
    }

    set nome(novoNome) {
        this.nome = novoNome;
    }

    pular() {
        console.log(`${this.nome} pulou!`);
    }

    // Não existe sobrecarga de métodos em JavaScript.
    // pular(alturaDoPulo) {
    //     console.log(`${this.nome} pulou ${alturaDoPulo} metros!`);
    // }

    pegarCogumelo() {
        console.log(`${this.nome} pegou um cogumelo!`);
    }
}

// Obejtos devem ser nomeados com substantivos.
const personagem = new Personagem('Mario', 'Vermelho', 0, 1.5, 'Atletico', true);