import React from 'react';
import { Container, ButtonContainer, ButtonText, Divider, Icon } from './styles';
import { useNavigation } from '@react-navigation/native';

export default function SettingsScreen() {
    const navigation = useNavigation();

    const handlePress = (screenName) => {
        navigation.navigate(screenName);
    };

    return (
        <Container>
            

            {/* Botões de navegação */}
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
