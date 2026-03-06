class INotificationService {
    send(to, message) {
        throw new Error("Method not implemented");
    }
}

class SMSService extends INotificationService {
    send(to, message) {
        console.log(`Enviando SMS para ${to}: ${message}`);
    }
}

class UserNotifier {
  constructor(notificationService) {
    this.notificationService = notificationService;
  }

  notify(user, message) {
    this.notificationService.send(user.phone, message);
  }
}

const smsService = new SMSService();
const notifier = new UserNotifier(smsService);

notifier.notify({ name: "Rodi", phone: "+55 51 99999-9999" }, "Olá, Bianca!");