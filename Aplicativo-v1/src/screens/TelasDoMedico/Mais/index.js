import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { Container, ButtonContainer, ButtonText, Divider, Icon } from './styles';
import Header from '../../../components/ComponentsMedico/Header';

export default function SettingsScreen() {
    // Função para lidar com cliques nos botões
    const handlePress = (screenName) => {
        console.log(`Navegar para: ${screenName}`);
    };

    return (
        <Container>
            {/* Cabeçalho */}
            <Header />

            {/* Botões abaixo do cabeçalho */}
            <ButtonContainer onPress={() => handlePress('Mensagens')}>
                <ButtonText>Mensagens</ButtonText>
                <Icon>{'>'}</Icon>
            </ButtonContainer>
            <Divider />

            <ButtonContainer onPress={() => handlePress('Perfil')}>
                <ButtonText>Perfil</ButtonText>
                <Icon>{'>'}</Icon>
            </ButtonContainer>
            <Divider />

            <ButtonContainer onPress={() => handlePress('Dados da Conta')}>
                <ButtonText>Dados da Conta</ButtonText>
                <Icon>{'>'}</Icon>
            </ButtonContainer>
            <Divider />

            <ButtonContainer onPress={() => handlePress('Configurações')}>
                <ButtonText>Configurações</ButtonText>
                <Icon>{'>'}</Icon>
            </ButtonContainer>
            <Divider />

            <ButtonContainer onPress={() => handlePress('Ajuda')}>
                <ButtonText>Ajuda</ButtonText>
                <Icon>{'>'}</Icon>
            </ButtonContainer>
            <Divider />
        </Container>
    );
}
