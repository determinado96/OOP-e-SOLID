const fs = require('fs');
const path = require('path');

class CodeAnalyzer {
  constructor(directory) {
    this.directory = directory;
  }

  analyze() {
    const files = fs.readdirSync(this.directory)
      .filter(file => file.endsWith('.txt'));

    let totalWordCount = 0;

    for (const file of files) {
      // Precismos fazer a leitura do código para entender o que ele faz.   
      const fullPath = path.join(this.directory, file);
      const content = fs.readFileSync(fullPath, 'utf-8');

      const tokens = content.split(' ');
      // Precisamos fazer a leitura do código para entender o que ele faz.   
      for (const token of tokens) {
        if (token === 'error') {
          totalWordCount++;
        }
      }
    }

    return totalWordCount;
  }
}

// -----

const fs = require('fs');
const path = require('path');

class CodeAnalyzer {
  constructor(directory) {
    this.directory = directory;
    this.totalWordCount = 0;
  }

  analyze() {
    // Deixa claro que o método é responsável por obter os arquivos de texto.
    const files = this.#getTextFiles();

    for (const file of files) {
      // Deixa claro que conta os erros em um arquivo específico. 
      this.#countErrorsInFile(file);
    }

    return this.totalWordCount;
  }

  #getTextFiles() {
    return fs.readdirSync(this.directory)
      .filter(file => file.endsWith('.txt'));
  }

  #countErrorsInFile(file) {
    const fullPath = path.join(this.directory, file);
    const content = fs.readFileSync(fullPath, 'utf-8');

    const tokens = content.split(' ');
    for (const token of tokens) {
      if (token === 'error') {
        this.totalWordCount++;
      }
    }
  }
}

