import React from 'react';
import { ScrollView } from 'react-native';
import {
    AppointmentContainer,
    AppointmentType,
    AppointmentTime,
    PatientName,
    AlertTitle,
} from './styles';

const AppointmentList = ({ appointments }) => {
    return (
        <ScrollView style={{ flex: 1 }}>
            {appointments.length > 0 ? (
                appointments.map((appt, index) => (
                    <AppointmentContainer key={index}>
                        <AppointmentType>{appt.type}</AppointmentType>
                        <AppointmentTime>{appt.time}</AppointmentTime>
                        <PatientName>{appt.patient}</PatientName>
                    </AppointmentContainer>
                ))
            ) : (
                <AlertTitle>Sem agendamentos para este dia.</AlertTitle>
            )}
        </ScrollView>
    );
};

export default AppointmentList;
