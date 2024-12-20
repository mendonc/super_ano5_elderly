import React from 'react';
import styled from 'styled-components/native';

import BemEstarIcon from '../../assets/BemEstar.svg';
import PacientesIcon from '../../assets/Pacientes.svg';
import MensagemIcon from '../../assets/Mensagens.svg';
import Bars3Icon from '../../assets/Bars3.svg';

const TabArea = styled.View`
    height: 70px;
    background-color: #d9d9d9;
    flex-direction: row;
    border-radius: 20px; /* Define o arredondamento */
    overflow: hidden; /* Garante que o conteúdo fique dentro das bordas arredondadas */
`;
const TabItem = styled.TouchableOpacity`
    flex : 1;
    justify-content: center;
    align-items: center;
`;

const TabText = styled.Text`
    font-size: 12px;
    color: ${(props) => (props.active ? "#25306b" : "#000000")}; /* Azul se ativo, preto se inativo */
    margin-top: 4px;
`;

export default ({ state, navigation }) => {

    const goTo = (screenName) => {
        navigation.navigate(screenName);
    }

    return (
        <TabArea>
            <TabItem onPress={()=>goTo('BemEstar')}>
                <BemEstarIcon width="40" height="40" fill={state.index === 0 ? "#25306b" : "#000000"} />   
                <TabText active={state.index === 0}>BemEstar</TabText>   
            </TabItem>
            <TabItem onPress={()=>goTo('Paciente')}>
                <PacientesIcon width="40" height="40" fill={state.index === 1 ? "#25306b" : "#000000"} />
                <TabText active={state.index === 1}>Pacientes</TabText>
            </TabItem>
            <TabItem onPress={()=>goTo('Mensagem')}>
                <MensagemIcon width="40" height="40" fill={state.index === 2 ? "#25306b" : "#000000"} />
                <TabText active={state.index === 2}>Mensagem</TabText>
            </TabItem>
            <TabItem onPress={()=>goTo('Mais')}>
                <Bars3Icon width="40" height="40" fill={state.index === 3 ? "#25306b" : "#000000"} />
                <TabText active={state.index === 3}>Mais</TabText>
            </TabItem>
            
        </TabArea>
    );
}