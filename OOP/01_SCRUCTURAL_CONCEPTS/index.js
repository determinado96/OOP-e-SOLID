/**
 * =========================================================
 * CLASSE: Personagem
 * =========================================================
 *
 * Representa um personagem do universo do jogo Mario Bros.
 *
 * A classe demonstra conceitos fundamentais de
 * Programação Orientada a Objetos em JavaScript:
 *
 * - Atributos estáticos
 * - Atributos de instância
 * - Métodos de instância
 * - Métodos estáticos
 * - Encapsulamento com getters e setters
 */

class Personagem {

    /**
     * =========================================================
     * ATRIBUTO ESTÁTICO
     * =========================================================
     *
     * Pertence à classe e não às instâncias.
     * Todos os personagens compartilham o mesmo universo.
     */

    static universo = 'Mário Bros';


    /**
     * =========================================================
     * CONSTRUTOR
     * =========================================================
     *
     * Responsável por inicializar os atributos de instância
     * de cada personagem criado.
     */

    constructor(nome, cor, quantidadeDeCogumelos, altura, tipoFisico, possuiBigode) {
        this._nome = nome;
        this.cor = cor;
        this.quantidadeDeCogumelos = quantidadeDeCogumelos;
        this.altura = altura;
        this.tipoFisico = tipoFisico;
        this.possuiBigode = possuiBigode;
    }


    /**
     * =========================================================
     * GETTER
     * =========================================================
     *
     * Permite acessar o nome do personagem de forma controlada.
     */

    get nome() {
        return this._nome;
    }


    /**
     * =========================================================
     * SETTER
     * =========================================================
     *
     * Permite alterar o nome do personagem de forma controlada.
     */

    set nome(novoNome) {
        this._nome = novoNome;
    }


    /**
     * =========================================================
     * MÉTODO ESTÁTICO
     * =========================================================
     *
     * Métodos estáticos pertencem à classe e não às instâncias.
     * Devem ser chamados diretamente pela classe.
     */

    static apresentarUniverso() {
        console.log(`Todos os personagens pertencem ao universo ${Personagem.universo}`);
    }


    /**
     * =========================================================
     * MÉTODO DE INSTÂNCIA
     * =========================================================
     *
     * Representa uma ação que o personagem pode executar.
     */

    pular() {
        console.log(`${this.nome} pulou!`);
    }


    /**
     * Observação:
     * JavaScript não possui sobrecarga de métodos como em
     * linguagens como Java ou C#.
     *
     * Exemplo de sobrecarga que NÃO funciona em JS:
     */

    // pular(alturaDoPulo) {
    //     console.log(`${this.nome} pulou ${alturaDoPulo} metros!`);
    // }


    /**
     * Outro comportamento do personagem.
     */

    pegarCogumelo() {
        console.log(`${this.nome} pegou um cogumelo!`);
    }
}


/**
 * =========================================================
 * CRIAÇÃO DE OBJETOS
 * =========================================================
 *
 * Objetos geralmente devem ser nomeados com substantivos,
 * pois representam entidades do domínio.
 */

const personagem = new Personagem(
    'Mario',
    'Vermelho',
    0,
    1.5,
    'Atlético',
    true
);

const personagem2 = new Personagem(
    'Luigi',
    'Verde',
    0,
    1.8,
    'Atlético',
    true
);


/**
 * Exibe os objetos criados
 */

console.log(personagem);
console.log(personagem2);


/**
 * =========================================================
 * USO DOS MÉTODOS
 * =========================================================
 */

// Método estático da classe
Personagem.apresentarUniverso();

// Métodos de instância
personagem.pular();
personagem.pegarCogumelo();