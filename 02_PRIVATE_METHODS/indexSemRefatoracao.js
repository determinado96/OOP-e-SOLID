const fs = require("fs");
const path = require("path");

/**
 * =========================================================
 * IMPLEMENTAÇÃO INICIAL
 * =========================================================
 *
 * A classe CodeAnalyzer é responsável por analisar arquivos
 * de um diretório e contar quantas vezes a palavra "error"
 * aparece dentro deles.
 *
 * Problema:
 * O método analyze() possui múltiplas responsabilidades:
 *
 * 1) Ler os arquivos do diretório
 * 2) Abrir e ler o conteúdo de cada arquivo
 * 3) Processar o conteúdo
 * 4) Contar ocorrências da palavra "error"
 *
 * Consequência:
 * O método fica grande e com responsabilidades misturadas,
 * dificultando leitura, manutenção e reutilização.
 */

class CodeAnalyzer {
  constructor(directory) {
    this.directory = directory;
  }

  /**
   * Analisa os arquivos do diretório informado
   * e retorna o total de ocorrências da palavra "error".
   */
  analyze() {
    // Obtém todos os arquivos do diretório e filtra apenas arquivos .txt
    const files = fs
      .readdirSync(this.directory)
      .filter((file) => file.endsWith(".txt"));

    let totalWordCount = 0;

    for (const file of files) {
      // Monta o caminho completo do arquivo
      const fullPath = path.join(this.directory, file);

      // Lê o conteúdo do arquivo
      const content = fs.readFileSync(fullPath, "utf-8");

      // Divide o conteúdo em palavras (tokens)
      const tokens = content.split(" ");

      // Percorre todas as palavras procurando "error"
      for (const token of tokens) {
        if (token === "error") {
          totalWordCount++;
        }
      }
    }

    return totalWordCount;
  }
}