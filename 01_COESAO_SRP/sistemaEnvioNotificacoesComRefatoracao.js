/**
 * =========================================================
 * CLASSE ABSTRATA: NotificationService
 * =========================================================
 *
 * Representa um serviço genérico de notificação.
 * Define o contrato que todos os serviços concretos
 * (Email, Sms, Push, etc.) devem implementar.
 *
 * Benefícios:
 * - Padroniza o comportamento das notificações
 * - Permite o uso de polimorfismo
 * - Facilita extensão do sistema
 */

class NotificationService {
  constructor() {
    // Impede a instanciação direta da classe abstrata
    if (new.target === NotificationService) {
      throw new Error(
        "NotificationService é abstrata e não pode ser instanciada."
      );
    }
  }

  /**
   * Verifica se o usuário possui os dados necessários
   * para envio da notificação.
   */
  canSend(user) {
    throw new Error("O método não foi implementado!");
  }

  /**
   * Realiza o envio da notificação.
   */
  send(user, message) {
    throw new Error("O método não foi implementado!");
  }
}


/**
 * =========================================================
 * IMPLEMENTAÇÃO: Email
 * =========================================================
 *
 * Responsável pelo envio de notificações via email.
 */

class Email extends NotificationService {

  /**
   * Verifica se o usuário possui email cadastrado.
   */
  canSend(user) {
    return !!user.email;
  }

  /**
   * Simula envio de email.
   */
  send(user, message) {
    console.log("Conectando ao servidor SMTP...");
    console.log(`Enviando EMAIL para ${user.email}: ${message}`);
  }
}


/**
 * =========================================================
 * IMPLEMENTAÇÃO: SMS
 * =========================================================
 *
 * Responsável pelo envio de notificações via SMS.
 */

class Sms extends NotificationService {

  /**
   * Verifica se o usuário possui telefone celular.
   */
  canSend(user) {
    return !!user.cellphone;
  }

  /**
   * Simula envio de SMS.
   */
  send(user, message) {
    console.log("Conectando ao gateway SMS...");
    console.log(`Enviando SMS para ${user.cellphone}: ${message}`);
  }
}


/**
 * =========================================================
 * IMPLEMENTAÇÃO: PUSH
 * =========================================================
 *
 * Responsável pelo envio de notificações push
 * para dispositivos móveis.
 */

class Push extends NotificationService {

  /**
   * Verifica se o usuário possui deviceId registrado.
   */
  canSend(user) {
    return !!user.deviceId;
  }

  /**
   * Simula envio de notificação push.
   */
  send(user, message) {
    console.log("Conectando ao Firebase...");
    console.log(`Enviando PUSH para ${user.deviceId}: ${message}`);
  }
}


/**
 * =========================================================
 * CLASSE ORQUESTRADORA: Notificador
 * =========================================================
 *
 * Responsável por coordenar o envio das notificações.
 *
 * A classe não conhece detalhes de implementação
 * de cada canal (Email, SMS, Push).
 *
 * Ela apenas utiliza os serviços disponíveis
 * e delega o envio para aqueles que puderem enviar.
 */

class Notificador {

  /**
   * Recebe os serviços de notificação via injeção de dependência.
   */
  constructor(notificationServices = []) {
    this.notificationServices = notificationServices;
  }

  /**
   * Envia notificações utilizando todos os serviços
   * que forem compatíveis com os dados do usuário.
   */
  notificar(user, message) {
    this.notificationServices.forEach((notificationService) => {

      // Verifica se o serviço pode enviar para o usuário
      if (notificationService.canSend(user)) {
        notificationService.send(user, message);
      }

    });
  }
}


/**
 * =========================================================
 * EXEMPLO DE USO
 * =========================================================
 */

/**
 * Dados do usuário destinatário
 */
const user = {
  email: "teste@teste.com.br",
  cellphone: "123456789",
};


/**
 * Mensagem que será enviada
 */
const message =
  "Boa tarde, Teste! Parabéns pela sua aprovação no concurso da UFRGS. Sua nomeação foi publicada no DOU hoje.";


/**
 * Instancia o notificador informando os serviços disponíveis
 */
const notificador = new Notificador([
  new Email(),
  new Sms()
]);


/**
 * Realiza o envio das notificações
 */
notificador.notificar(user, message);