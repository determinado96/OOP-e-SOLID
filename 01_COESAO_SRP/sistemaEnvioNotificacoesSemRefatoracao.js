/**
 * Classe responsável por enviar notificações para um usuário
 * através de diferentes canais (EMAIL, SMS ou PUSH).
 *
 * Problema:
 * - A classe contém múltiplas responsabilidades.
 * - Ela conhece os detalhes de implementação de cada canal.
 * - O uso de vários "ifs" indica forte acoplamento.
 *
 * Consequências:
 * - Viola o Single Responsibility Principle (SRP),
 *   pois a classe cresce sempre que surge um novo canal.
 *
 * - Viola o Open/Closed Principle (OCP),
 *   pois para adicionar um novo tipo de notificação
 *   será necessário modificar esta classe.
 */

class Notificador {

  /**
   * Envia uma notificação para o usuário
   * de acordo com o tipo de canal informado.
   *
   * @param {Object} usuario  Dados do usuário destinatário
   * @param {string} mensagem Conteúdo da notificação
   * @param {string} tipo     Canal de envio (EMAIL, SMS, PUSH)
   */
  enviar(usuario, mensagem, tipo) {

    /**
     * Envio de notificação por EMAIL
     */
    if (tipo === "EMAIL") {
      console.log("Conectando ao servidor SMTP...");
      console.log(`Enviando EMAIL para ${usuario.email}: ${mensagem}`);
    }

    /**
     * Envio de notificação por SMS
     */
    if (tipo === "SMS") {
      console.log("Conectando ao gateway SMS...");
      console.log(`Enviando SMS para ${usuario.telefone}: ${mensagem}`);
    }

    /**
     * Envio de notificação PUSH
     */
    if (tipo === "PUSH") {
      console.log("Conectando ao Firebase...");
      console.log(`Enviando PUSH para ${usuario.deviceId}: ${mensagem}`);
    }

    /**
     * Validação para tipos de notificação inválidos
     */
    if (tipo !== "EMAIL" && tipo !== "SMS" && tipo !== "PUSH") {
      throw new Error("Tipo inválido");
    }
  }
}


/**
 * Dados do usuário que receberá a notificação
 */
const usuario = {
  email: "user@email.com",
  telefone: "51999999999",
  deviceId: "abc123"
};


/**
 * Exemplo de uso da classe Notificador
 */
const notificador = new Notificador();

/**
 * Envia uma notificação de boas-vindas por EMAIL
 */
notificador.enviar(usuario, "Bem-vindo!", "EMAIL");