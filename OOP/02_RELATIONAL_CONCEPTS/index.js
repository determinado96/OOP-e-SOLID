/**
 * =========================================================
 * CLASSE BASE ABSTRATA: Pessoa
 * =========================================================
 *
 * Representa o conceito mais genérico de uma pessoa no sistema.
 *
 * Esta classe demonstra conceitos importantes de POO:
 *
 * - Abstração
 * - Encapsulamento
 * - Herança
 *
 * A classe é tratada como abstrata, ou seja,
 * não deve ser instanciada diretamente.
 */

class Pessoa {

    constructor(nome, sexo) {

        /**
         * Simulação de classe abstrata em JavaScript.
         * Impede que objetos sejam criados diretamente
         * a partir da classe Pessoa.
         */
        if (new.target === Pessoa) {
            throw new Error("Não é possível instanciar a classe Pessoa diretamente.");
        }

        this._nome = nome;
        this._sexo = sexo;
    }

    /**
     * =========================================================
     * GETTERS E SETTERS
     * =========================================================
     *
     * Permitem acesso controlado aos atributos da classe.
     */

    get nome() {
        return this._nome;
    }

    set nome(valor) {
        this._nome = valor;
    }

    get sexo() {
        return this._sexo;
    }

    set sexo(valor) {
        this._sexo = valor;
    }

    /**
     * =========================================================
     * MÉTODO ABSTRATO
     * =========================================================
     *
     * Define um comportamento que deve ser implementado
     * pelas subclasses.
     */

    trabalhar() {
        throw new Error("Método abstrato 'trabalhar()' deve ser implementado.");
    }
}


/**
 * =========================================================
 * CLASSE: Paciente
 * =========================================================
 *
 * Representa um paciente do sistema hospitalar.
 *
 * Herda da classe Pessoa e adiciona informações
 * específicas relacionadas à internação.
 */

class Paciente extends Pessoa {

    constructor(nome, sexo, dataInternacao) {
        super(nome, sexo); // chama o construtor da classe pai
        this._dataInternacao = dataInternacao;
    }

    get dataInternacao() {
        return this._dataInternacao;
    }

    set dataInternacao(valor) {
        this._dataInternacao = valor;
    }

    /**
     * Implementação do método abstrato trabalhar()
     */
    trabalhar() {
        console.log(`${this.nome} é um paciente e não trabalha.`);
    }
}


/**
 * =========================================================
 * CLASSE: Funcionario
 * =========================================================
 *
 * Representa funcionários da instituição.
 *
 * Herda da classe Pessoa e adiciona atributos
 * relacionados ao vínculo profissional.
 */

class Funcionario extends Pessoa {

    constructor(nome, sexo, dataAdmissao, matricula) {
        super(nome, sexo);

        this._dataAdmissao = dataAdmissao;
        this._matricula = matricula;
    }

    get dataAdmissao() {
        return this._dataAdmissao;
    }

    set dataAdmissao(valor) {
        this._dataAdmissao = valor;
    }

    get matricula() {
        return this._matricula;
    }

    set matricula(valor) {
        this._matricula = valor;
    }

    /**
     * Implementação do método trabalhar()
     * para funcionários.
     */
    trabalhar() {
        console.log(`${this.nome} é um funcionário e está trabalhando.`);
    }
}


/**
 * =========================================================
 * CLASSE: Medico
 * =========================================================
 *
 * Especialização da classe Funcionario.
 *
 * Adiciona informações específicas da profissão
 * médica, como o número do CRM.
 */

class Medico extends Funcionario {

    constructor(nome, sexo, dataAdmissao, matricula, crm) {
        super(nome, sexo, dataAdmissao, matricula);
        this._crm = crm;
    }

    get crm() {
        return this._crm;
    }

    set crm(valor) {
        this._crm = valor;
    }

    /**
     * Comportamento específico de médicos.
     */
    operar() {
        console.log(`${this.nome} está operando.`);
    }
}


/**
 * =========================================================
 * CLASSE: Gerente
 * =========================================================
 *
 * Outra especialização de Funcionario.
 *
 * Responsável por atividades administrativas
 * e gerenciais.
 */

class Gerente extends Funcionario {

    constructor(nome, sexo, dataAdmissao, matricula, cra) {
        super(nome, sexo, dataAdmissao, matricula);
        this._cra = cra;
    }

    get cra() {
        return this._cra;
    }

    set cra(valor) {
        this._cra = valor;
    }

    /**
     * Comportamento específico de gerentes.
     */
    liberarPagamento() {
        console.log(`${this.nome} liberou o pagamento.`);
    }
}


/**
 * =========================================================
 * EXEMPLO DE USO
 * =========================================================
 */

const medico1 = new Medico(
    "João",
    "M",
    "2020-01-01",
    "123",
    "CRM12345"
);

medico1.operar();
// João está operando.


const gerente1 = new Gerente(
    "Maria",
    "F",
    "2018-05-10",
    "456",
    "CRA67890"
);

gerente1.liberarPagamento();
// Maria liberou o pagamento.