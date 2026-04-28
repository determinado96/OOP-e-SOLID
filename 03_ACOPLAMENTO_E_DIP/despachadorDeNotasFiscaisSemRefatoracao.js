class DespachadorDeNotasFiscais {
  constructor(dao, impostos, lei, correios) {
    this.dao = dao;
    this.impostos = impostos;
    this.lei = lei;
    this.correios = correios;
  }

  processa(nf) {
    const imposto = this.impostos.para(nf);
    nf.setImposto(imposto);

    // Usa a lei somente para decidir o tipo de envio
    // “Esse if representa uma decisão de negócio que pode crescer ou se repetir, ou está acoplando várias responsabilidades ao mesmo tempo?”
    if (this.lei.deveEntregarUrgente(nf)) {
      this.correios.enviaPorSedex10(nf);
    } else {
      this.correios.enviaPorSedexComum(nf);
    }

    this.dao.persiste(nf);
  }
}