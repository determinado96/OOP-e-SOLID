/**
 * =========================================================
 * REFATORAÇÃO
 * =========================================================
 *
 * Objetivo:
 * Reduzir o acoplamento entre GeradorDeNotaFiscal
 * e as ações executadas após a geração da nota.
 *
 * Estratégia:
 * Criar uma abstração que representa qualquer ação
 * que deve ocorrer após a geração da nota fiscal.
 */


/**
 * =========================================================
 * ENTIDADE: NotaFiscal
 * =========================================================
 */

class NotaFiscal {
  constructor(valorBruto, imposto) {
    this.valorBruto = valorBruto;
    this.imposto = imposto;
    this.data = new Date();
  }
}


/**
 * =========================================================
 * ENTIDADE: Fatura
 * =========================================================
 */

class Fatura {
  constructor(valorMensal) {
    this.valorMensal = valorMensal;
  }

  getValorMensal() {
    return this.valorMensal;
  }
}


/**
 * =========================================================
 * INTERFACE (SIMULADA): AcaoAposGerarNota
 * =========================================================
 *
 * Representa uma ação que deve ocorrer após a geração
 * de uma nota fiscal.
 */

class AcaoAposGerarNota {
  executa(notaFiscal) {
    throw new Error("Método executa() precisa ser implementado");
  }
}


/**
 * =========================================================
 * IMPLEMENTAÇÃO: Persistência da Nota Fiscal
 * =========================================================
 */

class NFDao extends AcaoAposGerarNota {
  executa(notaFiscal) {
    console.log("Persistindo nota fiscal...");
    console.log(notaFiscal);
  }
}


/**
 * =========================================================
 * IMPLEMENTAÇÃO: Envio de Email
 * =========================================================
 */

class EnviadorDeEmail extends AcaoAposGerarNota {
  executa(notaFiscal) {
    console.log("Enviando email...");
    console.log(notaFiscal);
  }
}


/**
 * =========================================================
 * IMPLEMENTAÇÃO: Envio de SMS
 * =========================================================
 */

class EnviadorDeSMS extends AcaoAposGerarNota {
  executa(notaFiscal) {
    console.log("Enviando SMS...");
  }
}


/**
 * =========================================================
 * CLASSE PRINCIPAL REFATORADA
 * =========================================================
 *
 * Agora GeradorDeNotaFiscal não depende de implementações
 * concretas, apenas da abstração AcaoAposGerarNota.
 *
 * Benefícios:
 * - Redução do acoplamento
 * - Fácil extensão do sistema
 * - Aplicação do Open/Closed Principle (OCP)
 */

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

    // Executa todas as ações registradas
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


/**
 * Exemplo de uso da versão refatorada
 */

const acoes = [
  new NFDao(),
  new EnviadorDeEmail(),
  new EnviadorDeSMS()
];

const geradorRefatorado = new GeradorDeNotaFiscal(acoes);

const faturaRefatorada = new Fatura(1000);

geradorRefatorado.gera(faturaRefatorada);