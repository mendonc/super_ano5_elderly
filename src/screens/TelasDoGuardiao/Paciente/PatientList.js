import React from 'react';
import { Text, FlatList, TouchableOpacity } from 'react-native';
import { PatientCard, PatientInfo, PatientName, InfoText, StarIconContainer } from './styles';
import EstrelaIcon from '../../../assets/Estrela.svg';

export default function PatientList({ patients, toggleFavorite }) {
    return (
        <FlatList
            data={patients}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <PatientCard>
                    <StarIconContainer>
                        <TouchableOpacity onPress={() => toggleFavorite(item.id)}>
                            <EstrelaIcon
                                width={20}
                                height={20}
                                fill={item.isFavorite ? '#FFD700' : '#D3D3D3'}
                            />
                        </TouchableOpacity>
                    </StarIconContainer>
                    <PatientInfo>
                        <PatientName>{item.name}</PatientName>
                        <InfoText>
                            <Text style={{ fontWeight: 'bold' }}>Última consulta: </Text>
                            {item.lastConsultation}
                        </InfoText>
                        <InfoText>
                            <Text style={{ fontWeight: 'bold' }}>Diagnósticos: </Text>
                            {item.diagnosis}
                        </InfoText>
                        <InfoText>
                            <Text style={{ fontWeight: 'bold' }}>Tratamentos: </Text>
                            {item.treatments}
                        </InfoText>
                        {item.allergies && (
                            <InfoText>
                                <Text style={{ fontWeight: 'bold' }}>Alergias: </Text>
                                {item.allergies}
                            </InfoText>
                        )}
                        <InfoText>
                            <Text style={{ fontWeight: 'bold' }}>Próximos passos: </Text>
                            {item.nextSteps}
                        </InfoText>
                    </PatientInfo>
                </PatientCard>
            )}
        />
    );
}
