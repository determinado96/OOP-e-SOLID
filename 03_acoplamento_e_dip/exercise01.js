// Módulo instável: envia notificações por SMS
class SMSService {
  sendSMS(to, message) {
    console.log(`Enviando SMS para ${to}: ${message}`);
  }
}

// Módulo de alto nível: notificador de usuários
// UserNotifier -> SMSService
class UserNotifier {
  constructor(smsService) {
    this.smsService = smsService; // Dependência direta no módulo instável
  }

  notify(user, message) {
    this.smsService.sendSMS(user.phone, message);
  }
}

// Uso
const smsService = new SMSService();
const notifier = new UserNotifier(smsService);

notifier.notify({ name: "Rodi", phone: "+55 51 99999-9999" }, "Olá, Bianca!");