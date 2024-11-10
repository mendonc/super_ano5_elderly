import React from 'react';
import { Text } from 'react-native';
import { Container } from './styles';
import Header from '../../../components/ComponentsMedico/Header';

export default () => {
    return (
        <Container>
            <Header />
            <Text>Pacientes</Text>
        </Container>
    );
}