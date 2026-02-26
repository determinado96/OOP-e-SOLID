// Classe base Pessoa (conceito mais abstrato)
class Pessoa {
    constructor(nome, sexo) {
        // Simula classe abstrata, impedindo instância direta
        if (new.target === Pessoa) {
            throw new Error("Não é possível instanciar a classe Pessoa diretamente.");
        }
        this._nome = nome;
        this._sexo = sexo;
    }

    // Getters e setters
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

    // Método abstrato (somente assinatura conceitual)
    trabalhar() {
        throw new Error("Método abstrato 'trabalhar()' deve ser implementado.");
    }
}

// Paciente herda Pessoa
class Paciente extends Pessoa {
    constructor(nome, sexo, dataInternacao) {
        super(nome, sexo); // chama o construtor da classe Pai
        this._dataInternacao = dataInternacao;
    }

    get dataInternacao() {
        return this._dataInternacao;
    }
    set dataInternacao(valor) {
        this._dataInternacao = valor;
    }

    trabalhar() {
        console.log(`${this.nome} é um paciente e não trabalha.`);
    }
}

// Funcionario herda Pessoa
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

    trabalhar() {
        console.log(`${this.nome} é um funcionário e está trabalhando.`);
    }
}

// Medico herda Funcionario
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

    operar() {
        console.log(`${this.nome} está operando.`);
    }
}

// Gerente herda Funcionario
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

    liberarPagamento() {
        console.log(`${this.nome} liberou o pagamento.`);
    }
}

// --- Exemplo de uso ---
const medico1 = new Medico("João", "M", "2020-01-01", "123", "CRM12345");
medico1.operar(); // João está operando.

const gerente1 = new Gerente("Maria", "F", "2018-05-10", "456", "CRA67890");
gerente1.liberarPagamento(); // Maria liberou o pagamento.