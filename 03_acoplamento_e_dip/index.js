// Entidade NotaFiscal
class NotaFiscal {
  constructor(valorBruto, imposto) {
    this.valorBruto = valorBruto;
    this.imposto = imposto;
    this.data = new Date();
  }
}

// Dependência 1
class EnviadorDeEmail {
  enviaEmail(notaFiscal) {
    console.log("Enviando email da nota fiscal...");
    console.log(notaFiscal);
  }
}

// Dependência 2
class NotaFiscalDao {
  persiste(notaFiscal) {
    console.log("Persistindo nota fiscal no banco...");
    console.log(notaFiscal);
  }
}

// Entidade Fatura
class Fatura {
  constructor(valorMensal) {
    this.valorMensal = valorMensal;
  }

  getValorMensal() {
    return this.valorMensal;
  }
}

// Classe principal (equivalente ao exemplo Java)
class GeradorDeNotaFiscal {
  constructor(email, dao) {
    this.email = email;
    this.dao = dao;
  }

  gera(fatura) {
    const valor = fatura.getValorMensal();

    const nf = new NotaFiscal(
      valor,
      this.impostoSimplesSobreO(valor)
    );

    // Acoplamento: GeradorDeNotaFiscal depende de EnviadorDeEmail e NotaFiscalDao
    // Se enviarEmail ou persite mudarem, teremos que modificar esta classe.
    // Se enviarEmail ou persite quebrar, o erro será propagado para esta classe.
    // Se surgirem novas formas de enviar a nota fiscal ou de persistir a nota fiscal, teremos que modificar esta classe.
    // Acoplamos também as dependências de enviarEmail e persiste, que vem juntas. Um classe depende de outra, que por usa vez depende de outra, e assim por diante. O acoplamento é transitivo.
    this.email.enviaEmail(nf);
    this.dao.persiste(nf);

    return nf;
  }

  impostoSimplesSobreO(valor) {
    return valor * 0.06;
  }
}

const email = new EnviadorDeEmail();
const dao = new NotaFiscalDao();

const gerador = new GeradorDeNotaFiscal(email, dao);

const fatura = new Fatura(1000);

const notaFiscal = gerador.gera(fatura);

// -----

class NotaFiscal {
  constructor(valorBruto, imposto) {
    this.valorBruto = valorBruto;
    this.imposto = imposto;
    this.data = new Date();
  }
}

class Fatura {
  constructor(valorMensal) {
    this.valorMensal = valorMensal;
  }

  getValorMensal() {
    return this.valorMensal;
  }
}

// Simulação de interface
class AcaoAposGerarNota {
  executa(notaFiscal) {
    throw new Error("Método executa() precisa ser implementado");
  }
}

class NFDao extends AcaoAposGerarNota {
  executa(notaFiscal) {
    console.log("Persistindo nota fiscal...");
    console.log(notaFiscal);
  }
}

class EnviadorDeEmail extends AcaoAposGerarNota {
  executa(notaFiscal) {
    console.log("Enviando email...");
    console.log(notaFiscal);
  }
}

class EnviadorDeSMS extends AcaoAposGerarNota {
  executa(notaFiscal) {
    console.log("Enviando SMS...");
  }
}

class GeradorDeNotaFiscal {
  constructor(acoes = []) {
    this.acoes = acoes;
  }

  gera(fatura) {
    const valor = fatura.getValorMensal();

    const nf = new NotaFiscal(
      valor,
      this.impostoSimplesSobreO(valor)
    );

    for (const acao of this.acoes) {
      if (typeof acao.executa !== "function") {
        throw new Error("Ação não implementa executa()");
      }
      acao.executa(nf);
    }

    return nf;
  }

  impostoSimplesSobreO(valor) {
    return valor * 0.06;
  }
}

const acoes = [
  new NFDao(),
  new EnviadorDeEmail(),
  new EnviadorDeSMS()
];

const gerador = new GeradorDeNotaFiscal(acoes);

const fatura = new Fatura(1000);

gerador.gera(fatura);