class Personagem {
    static universo = 'Mário Bros'; // Atributo estático da classe Personagem.

    // Atributos de instância.
    constructor(nome, cor, quantidadeDeCogumelos, altura, tipoFisico, possuiBigode) {
        this._nome = nome;
        this.cor = cor;
        this.quantidadeDeCogumelos = quantidadeDeCogumelos;
        this.altura = altura;
        this.tipoFisico = tipoFisico;
        this.possuiBigode = possuiBigode;
    }
    
    // Métodos de instância.
    get nome() {
        return this._nome;
    }

    set nome(novoNome) {
        this._nome = novoNome;
    }

    // Método estático da classe Personagem.
    static apresentarUniverso() {
        console.log(`Todos os personagens pertencem ao universo ${Personagem.universo}`);
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
const personagem2 = new Personagem('Luigi', 'Verde', 0, 1.8, 'Atletico', true);

console.log(personagem);
console.log(personagem2);

// Mensagem
Personagem.apresentarUniverso();
personagem.pular();
personagem.pegarCogumelo();