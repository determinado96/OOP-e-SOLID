/**
 * =========================================================
 * CONCEITO: ASSOCIAÇÃO MÚLTIPLA
 * =========================================================
 *
 * Ocorre quando uma classe se relaciona com várias
 * classes diferentes ao mesmo tempo.
 *
 * Esse tipo de relacionamento é muito comum em sistemas
 * de negócio, onde uma entidade central agrega informações
 * de outras entidades.
 *
 * Neste exemplo:
 *
 * Pedido se relaciona com:
 * - Cliente
 * - Produto(s)
 * - Pagamento
 */


/**
 * =========================================================
 * CLASSE: Produto
 * =========================================================
 *
 * Representa um item que pode ser comprado em um pedido.
 */

class Produto {

  constructor(nome) {
    this.nome = nome;
  }

}


/**
 * =========================================================
 * CLASSE: Cliente
 * =========================================================
 *
 * Representa o cliente responsável por realizar o pedido.
 */

class Cliente {

  constructor(nome) {
    this.nome = nome;
  }

}


/**
 * =========================================================
 * CLASSE: Pagamento
 * =========================================================
 *
 * Representa as informações de pagamento do pedido.
 */

class Pagamento {

  constructor(valor) {
    this.valor = valor;
  }

}


/**
 * =========================================================
 * CLASSE: Pedido
 * =========================================================
 *
 * Classe central do exemplo.
 *
 * Ela possui associações com várias outras classes:
 *
 * - Cliente
 * - Produto (lista de produtos)
 * - Pagamento
 */

class Pedido {

  constructor(cliente, produtos, pagamento) {

    /**
     * Associação com Cliente
     */
    this.cliente = cliente;

    /**
     * Associação com múltiplos produtos
     */
    this.produtos = produtos;

    /**
     * Associação com Pagamento
     */
    this.pagamento = pagamento;
  }

}


/**
 * =========================================================
 * CRIAÇÃO DOS OBJETOS
 * =========================================================
 */

// Criação do cliente
const cliente = new Cliente("João");

// Criação dos produtos
const produto1 = new Produto("Notebook");
const produto2 = new Produto("Mouse");

// Criação do pagamento
const pagamento = new Pagamento(5000);


/**
 * Criação do pedido com todas as associações
 */

const pedido = new Pedido(
  cliente,
  [produto1, produto2],
  pagamento
);