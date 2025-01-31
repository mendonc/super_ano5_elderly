import PushNotification from "react-native-push-notification";
import { initialMedicamentos } from "../screens/TelasDoPaciente/Tratamento/medicamentoData";

export const configureNotifications = () => {
  PushNotification.configure({
    onNotification: function (notification) {
      console.log("Notificação recebida:", notification);
    },
    popInitialNotification: true,
    requestPermissions: true,
  });
};

const calcularHorarios = (frequencia) => {
  const agora = new Date();
  const horarios = [];

  if (frequencia === "1x/dia") {
    horarios.push(new Date(agora.setHours(8, 0, 0))); // Exemplo: 8h da manhã
  } else if (frequencia.includes("A cada")) {
    const intervalo = parseInt(frequencia.match(/\d+/)[0]); // Pega o número (6, 8, etc.)
    for (let i = 0; i < 24; i += intervalo) {
      const horario = new Date();
      horario.setHours(i, 0, 0);
      if (horario > new Date()) horarios.push(horario); // Apenas horários futuros
    }
  }
  return horarios;
};

export const agendarNotificacoes = () => {
  initialMedicamentos.forEach((medicamento) => {
    const horarios = calcularHorarios(medicamento.frequency);

    horarios.forEach((horario) => {
      PushNotification.localNotificationSchedule({
        channelId: "medicamentos-alerta",
        title: "Hora do Remédio",
        message: `Hora de tomar ${medicamento.name} (${medicamento.dosage}).`, // Mensagem com o nome e dosagem
        date: horario, // Data e hora da notificação
        allowWhileIdle: true,
        repeatType: "day", // Repetir diariamente
      });
    });
  });
};
