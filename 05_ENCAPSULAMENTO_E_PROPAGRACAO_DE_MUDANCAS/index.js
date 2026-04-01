// Intimidade inapropriada

class ProcessadorDeBoletos {
  processa(boletos, fatura) {
    let total = 0;

    for (const boleto of boletos) {
      const pagamento = new Pagamento(
        boleto.getValor(),
        MeioDePagamento.BOLETO
      );

      fatura.getPagamentos().push(pagamento);
      total += fatura.getValor();
    }

    // Quem está decidindo se a fatura está paga? → ProcessadorDeBoletos
    // Mas quem deveria saber se está paga? → Fatura
    // Regra espalhada e repetida (necessidade de procurar as mudanças em vários lugares)
    if (total >= fatura.getValor()) {
      fatura.setPago(true);
    }
  }
}

class ProcessaorDeCartao {
  processa(boletos, fatura) {
    // ...

    // Quem está decidindo se a fatura está paga? → ProcessadorDeBoletos
    // Mas quem deveria saber se está paga? → Fatura
    // Regra espalhada e repetida (necessidade de procurar as mudanças em vários lugares)
    if (total >= fatura.getValor()) {
      fatura.setPago(true);
    }
  }
}