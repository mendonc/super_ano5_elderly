import React, { useState } from 'react';
import { Modal, View, TextInput, Button, Text } from 'react-native';

const AddAppointmentModal = ({ visible, onClose, onSave, selectedDate }) => {
    const [appointment, setAppointment] = useState({
        date: selectedDate || '',
        time: '',
        patient: '',
        type: '',
    });

    // Função para salvar a consulta
    const handleSave = () => {
        if (appointment.date && appointment.time && appointment.patient && appointment.type) {
            onSave(appointment);
            setAppointment({ date: selectedDate || '', time: '', patient: '', type: '' });
        } else {
            alert('Por favor, preencha todos os campos!');
        }
    };

    return (
        <Modal
            visible={visible}
            transparent={true}
            animationType="slide"
            onRequestClose={onClose}
        >
            <View
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                }}
            >
                <View
                    style={{
                        width: '80%',
                        padding: 20,
                        backgroundColor: '#FFF',
                        borderRadius: 10,
                    }}
                >
                    <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 20 }}>
                        Adicionar Consulta
                    </Text>
                    <TextInput
                        placeholder="Data (dd/mm)"
                        value={appointment.date}
                        onChangeText={(text) =>
                            setAppointment({ ...appointment, date: text })
                        }
                        style={{
                            borderBottomWidth: 1,
                            borderBottomColor: '#CCC',
                            marginBottom: 10,
                            padding: 5,
                        }}
                    />
                    <TextInput
                        placeholder="Horário (hh:mm)"
                        value={appointment.time}
                        onChangeText={(text) =>
                            setAppointment({ ...appointment, time: text })
                        }
                        style={{
                            borderBottomWidth: 1,
                            borderBottomColor: '#CCC',
                            marginBottom: 10,
                            padding: 5,
                        }}
                    />
                    <TextInput
                        placeholder="Paciente"
                        value={appointment.patient}
                        onChangeText={(text) =>
                            setAppointment({ ...appointment, patient: text })
                        }
                        style={{
                            borderBottomWidth: 1,
                            borderBottomColor: '#CCC',
                            marginBottom: 10,
                            padding: 5,
                        }}
                    />
                    <TextInput
                        placeholder="Tipo de Consulta (Consulta Clínica ou Procedimento)"
                        value={appointment.type}
                        onChangeText={(text) =>
                            setAppointment({ ...appointment, type: text })
                        }
                        style={{
                            borderBottomWidth: 1,
                            borderBottomColor: '#CCC',
                            marginBottom: 10,
                            padding: 5,
                        }}
                    />
                    <Button title="Salvar" onPress={handleSave} />
                    <Button title="Cancelar" color="red" onPress={onClose} />
                </View>
            </View>
        </Modal>
    );
};

export default AddAppointmentModal;
