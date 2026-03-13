/**
 * =========================================================
 * IMPLEMENTAÇÃO INICIAL
 * =========================================================
 *
 * Problema:
 * A classe GeradorDeNotaFiscal depende diretamente de
 * implementações concretas responsáveis por executar ações
 * após a geração da nota fiscal.
 *
 * Consequências:
 * - Alto acoplamento
 * - Dificuldade de extensão
 * - Violação do Open/Closed Principle (OCP)
 */


/**
 * =========================================================
 * ENTIDADE: NotaFiscal
 * =========================================================
 *
 * Representa uma nota fiscal gerada pelo sistema.
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
 * DEPENDÊNCIA: EnviadorDeEmail
 * =========================================================
 *
 * Responsável por enviar a nota fiscal por email.
 */

class EnviadorDeEmail {
  enviaEmail(notaFiscal) {
    console.log("Enviando email da nota fiscal...");
    console.log(notaFiscal);
  }
}


/**
 * =========================================================
 * DEPENDÊNCIA: NotaFiscalDao
 * =========================================================
 *
 * Responsável por persistir a nota fiscal no banco.
 */

class NotaFiscalDao {
  persiste(notaFiscal) {
    console.log("Persistindo nota fiscal no banco...");
    console.log(notaFiscal);
  }
}


/**
 * =========================================================
 * ENTIDADE: Fatura
 * =========================================================
 *
 * Representa a fatura mensal que dará origem à nota fiscal.
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
 * CLASSE PRINCIPAL: GeradorDeNotaFiscal
 * =========================================================
 *
 * Responsável por gerar uma nota fiscal a partir de uma fatura.
 *
 * Problema:
 * A classe está fortemente acoplada a duas dependências:
 * - EnviadorDeEmail
 * - NotaFiscalDao
 *
 * Consequências:
 * - Se qualquer uma dessas classes mudar,
 *   GeradorDeNotaFiscal precisará ser modificada.
 *
 * - Se quisermos adicionar novas ações (ex: enviar SMS),
 *   será necessário alterar esta classe.
 *
 * - O acoplamento também é transitivo:
 *   se uma dependência depender de outra,
 *   o impacto pode se propagar pelo sistema.
 */

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

    // Ações executadas após a geração da nota fiscal
    this.email.enviaEmail(nf);
    this.dao.persiste(nf);

    return nf;
  }

  impostoSimplesSobreO(valor) {
    return valor * 0.06;
  }
}


/**
 * Exemplo de uso
 */

const email = new EnviadorDeEmail();
const dao = new NotaFiscalDao();

const gerador = new GeradorDeNotaFiscal(email, dao);

const fatura = new Fatura(1000);

const notaFiscal = gerador.gera(fatura);