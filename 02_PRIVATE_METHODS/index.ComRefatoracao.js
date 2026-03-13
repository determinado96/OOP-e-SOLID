/**
 * =========================================================
 * REFATORAÇÃO
 * =========================================================
 *
 * Objetivo:
 * Melhorar a legibilidade do código separando responsabilidades
 * em métodos menores e mais claros.
 *
 * Benefícios:
 * - Código mais fácil de entender
 * - Métodos com responsabilidade única
 * - Melhor organização da lógica
 */

const fs = require("fs");
const path = require("path");

class CodeAnalyzer {
  constructor(directory) {
    this.directory = directory;
    this.totalWordCount = 0;
  }

  /**
   * Método principal responsável por coordenar a análise.
   */
  analyze() {
    // Obtém os arquivos de texto do diretório
    const files = this.#getTextFiles();

    for (const file of files) {
      // Conta quantas vezes "error" aparece no arquivo
      this.#countErrorsInFile(file);
    }

    return this.totalWordCount;
  }

  /**
   * Recupera apenas arquivos .txt do diretório analisado.
   */
  #getTextFiles() {
    return fs
      .readdirSync(this.directory)
      .filter((file) => file.endsWith(".txt"));
  }

  /**
   * Lê o conteúdo de um arquivo específico e conta
   * quantas vezes a palavra "error" aparece nele.
   */
  #countErrorsInFile(file) {
    const fullPath = path.join(this.directory, file);

    // Lê o conteúdo do arquivo
    const content = fs.readFileSync(fullPath, "utf-8");

    // Divide o conteúdo em palavras
    const tokens = content.split(" ");

    // Conta ocorrências da palavra "error"
    for (const token of tokens) {
      if (token === "error") {
        this.totalWordCount++;
      }
    }
  }
}