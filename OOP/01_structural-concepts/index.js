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

    pegarCogumelo() {
        console.log(`${this.nome} pegou um cogumelo!`);
    }
}