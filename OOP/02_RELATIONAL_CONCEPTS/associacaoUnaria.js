/**
 * =========================================================
 * CONCEITO: AUTO-RELACIONAMENTO (SELF-RELATIONSHIP)
 * =========================================================
 *
 * Ocorre quando uma classe possui um relacionamento
 * com ela mesma.
 *
 * Em outras palavras, um objeto da classe pode possuir
 * referência para outro objeto da mesma classe.
 *
 * Esse tipo de modelagem é comum em estruturas hierárquicas,
 * como por exemplo:
 *
 * - Funcionários e seus gerentes
 * - Categorias e subcategorias
 * - Comentários e respostas
 */

class Funcionario {

  /**
   * =========================================================
   * CONSTRUTOR
   * =========================================================
   *
   * Inicializa um funcionário.
   *
   * Parâmetros:
   * - nome: nome do funcionário
   * - gerente: referência para outro funcionário que atua
   *   como gerente (opcional)
   */

  constructor(nome, gerente = null) {
    this.nome = nome;

    /**
     * AUTO-RELACIONAMENTO
     *
     * O gerente também é um objeto da classe Funcionario.
     * Dessa forma, um funcionário pode apontar para outro
     * funcionário que exerce função de gerente.
     */
    this.gerente = gerente;
  }
}


/**
 * =========================================================
 * CRIAÇÃO DOS OBJETOS
 * =========================================================
 *
 * Primeiro criamos um funcionário que será o gerente.
 */

const gerente = new Funcionario("Carlos");


/**
 * Agora criamos um funcionário comum que possui
 * um gerente associado.
 */

const funcionario = new Funcionario("Rodrigo", gerente);


/**
 * =========================================================
 * ACESSO AO RELACIONAMENTO
 * =========================================================
 *
 * Podemos acessar o gerente do funcionário
 * através da referência armazenada.
 */

console.log(funcionario.gerente.nome);

// Saída esperada:
// Carlos