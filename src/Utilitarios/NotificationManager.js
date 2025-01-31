import PushNotification from "react-native-push-notification";
import { initialMedicamentos } from "../data/medicamentoData";
import NotificationManager from '../services/NotificationManager';


class NotificationManager {
  // Configurar notificações
  configure = () => {
    PushNotification.configure({
      onNotification: function (notification) {
        console.log("Notificação recebida:", notification);
      },
      popInitialNotification: true,
      requestPermissions: true,
    });

    // Cria o canal de notificações (Android)
    PushNotification.createChannel(
      {
        channelId: "medicamentos-alerta",
        channelName: "Alertas de Medicamentos",
        channelDescription: "Notificações para horários de medicamentos",
        soundName: "default",
        importance: 4,
        vibrate: true,
      },
      (created) => console.log(`Canal criado: ${created}`)
    );
  };

  // Calcular horários com base na frequência
  calcularHorarios = (frequencia) => {
    const agora = new Date();
    const horarios = [];

    if (frequencia === "1x/dia") {
      horarios.push(new Date(agora.setHours(8, 0, 0))); // Exemplo: 8h
    } else if (frequencia.includes("A cada")) {
      const intervalo = parseInt(frequencia.match(/\d+/)[0]); // Extrai o número (6, 8, etc.)
      for (let i = 0; i < 24; i += intervalo) {
        const horario = new Date();
        horario.setHours(i, 0, 0);
        if (horario > agora) horarios.push(horario); // Apenas horários futuros
      }
    }
    return horarios;
  };

  // Agendar notificações
  agendarNotificacoes = () => {
    initialMedicamentos.forEach((medicamento) => {
      const horarios = this.calcularHorarios(medicamento.frequency);

      horarios.forEach((horario) => {
        PushNotification.localNotificationSchedule({
          channelId: "medicamentos-alerta",
          title: "Hora do Remédio",
          message: `Hora de tomar ${medicamento.name} (${medicamento.dosage}).`, // Mensagem
          date: horario, // Data e hora da notificação
          allowWhileIdle: true,
          repeatType: "day", // Repetir diariamente
        });
      });
    });
  };
}

export default new NotificationManager();
