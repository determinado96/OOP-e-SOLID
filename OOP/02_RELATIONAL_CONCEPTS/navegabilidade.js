/**
 * =========================================================
 * CONCEITO: NAVEGABILIDADE EM ASSOCIAÇÕES
 * =========================================================
 *
 * Navegabilidade define quem conhece quem em um relacionamento
 * entre objetos.
 *
 * Em outras palavras:
 * indica qual objeto possui referência para o outro.
 *
 * Tipos de navegabilidade:
 *
 * Tipo            Significado
 * ---------------------------------------------------------
 * Unidirecional   Apenas um objeto conhece o outro
 * Bidirecional    Ambos os objetos possuem referência entre si
 */


/**
 * =========================================================
 * EXEMPLO 1: NAVEGABILIDADE UNIDIRECIONAL
 * =========================================================
 *
 * Apenas um objeto conhece o outro.
 *
 * Neste caso:
 * Livro conhece Autor.
 * Autor NÃO conhece seus livros.
 */


class Autor {

  constructor(nome) {
    this.nome = nome;
  }

}


class Livro {

  constructor(titulo, autor) {
    this.titulo = titulo;

    /**
     * Associação unidirecional
     *
     * Livro possui referência para Autor.
     */
    this.autor = autor;
  }

}


// Criação dos objetos

const autor = new Autor("Machado de Assis");

const livro = new Livro(
  "Dom Casmurro",
  autor
);


/**
 * Relação existente:
 *
 * Livro  → Autor
 *
 * Relação inexistente:
 *
 * Autor  → Livro ❌
 *
 * O autor não possui conhecimento
 * sobre quais livros escreveu.
 */



/**
 * =========================================================
 * EXEMPLO 2: NAVEGABILIDADE BIDIRECIONAL
 * =========================================================
 *
 * Agora ambos os objetos possuem referência um ao outro.
 *
 * Autor conhece seus livros
 * Livro conhece seu autor
 */


class Autor {

  constructor(nome) {

    this.nome = nome;

    /**
     * Coleção de livros escritos pelo autor
     */
    this.livros = [];
  }

  /**
   * Adiciona um livro ao autor
   */
  adicionarLivro(livro) {
    this.livros.push(livro);
  }

}


class Livro {

  constructor(titulo, autor) {

    this.titulo = titulo;

    /**
     * Referência ao autor do livro
     */
    this.autor = autor;
  }

}


// Criação do autor

const autor2 = new Autor("Machado de Assis");


// Criação dos livros

const livro1 = new Livro(
  "Dom Casmurro",
  autor2
);

const livro2 = new Livro(
  "Memórias Póstumas de Brás Cubas",
  autor2
);


// Associação bidirecional

autor2.adicionarLivro(livro1);
autor2.adicionarLivro(livro2);