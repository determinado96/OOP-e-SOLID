class EntregadorDeNFs {
  constructor(lei, correios) {
    this.lei = lei;
    this.correios = correios;
  }

  entrega(nf) {
    if (this.lei.deveEntregarUrgente(nf)) {
      this.correios.enviaPorSedex10(nf);
    } else {
      this.correios.enviaPorSedexComum(nf);
    }
  }
}

class DespachadorDeNotasFiscais {
  constructor(dao, impostos, entregador) {
    this.dao = dao;
    this.impostos = impostos;
    this.entregador = entregador;
  }

  processa(nf) {
    const imposto = this.impostos.para(nf);
    nf.setImposto(imposto);

    this.entregador.entrega(nf);

    this.dao.persiste(nf);
  }
}