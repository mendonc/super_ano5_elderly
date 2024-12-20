import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { launchImageLibrary } from 'react-native-image-picker';

export default function ProfileScreen() {
    const navigation = useNavigation();

    const [profileData, setProfileData] = useState({
        photo: 'https://via.placeholder.com/100', // Foto inicial
        name: 'Dr. João Silva',
        specialty: 'Cardiologista',
    });

    // Função para alterar a foto de perfil
    const handleChangePhoto = async () => {
        try {
            const result = await launchImageLibrary({
                mediaType: 'photo',
                maxWidth: 300,
                maxHeight: 300,
                quality: 1,
            });

            if (result.assets && result.assets.length > 0) {
                const selectedPhoto = result.assets[0].uri;
                setProfileData((prev) => ({ ...prev, photo: selectedPhoto }));
                Alert.alert('Foto Atualizada', 'Sua foto de perfil foi alterada com sucesso!');
            } else {
                Alert.alert('Operação Cancelada', 'Nenhuma foto foi selecionada.');
            }
        } catch (error) {
            console.error('Erro ao selecionar a foto:', error);
            Alert.alert('Erro', 'Não foi possível alterar a foto de perfil.');
        }
    };

    // Função para redirecionar para a página de ajuda
    const handleEditInfo = () => {
        navigation.navigate('Ajuda'); // Redireciona para a página de ajuda
    };

    return (
        <View style={styles.container}>
            {/* Foto de Perfil */}
            <TouchableOpacity style={styles.photoContainer} onPress={handleChangePhoto}>
                <Image source={{ uri: profileData.photo }} style={styles.photo} />
                <Text style={styles.changePhotoText}>Alterar Foto</Text>
            </TouchableOpacity>

            {/* Informações do Perfil */}
            <View style={styles.infoContainer}>
                <Text style={styles.label}>Nome</Text>
                <Text style={styles.info}>{profileData.name}</Text>

                <Text style={styles.label}>Especialidade</Text>
                <Text style={styles.info}>{profileData.specialty}</Text>
            </View>

            {/* Botão para editar informações */}
            <TouchableOpacity style={styles.editButton} onPress={handleEditInfo}>
                <Text style={styles.editButtonText}>Editar Informações</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#ffffff',
    },
    photoContainer: {
        alignItems: 'center',
        marginBottom: 30,
    },
    photo: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 10,
    },
    changePhotoText: {
        color: '#007bff',
        fontSize: 14,
    },
    infoContainer: {
        marginBottom: 30,
    },
    label: {
        fontSize: 14,
        color: '#777777',
        marginBottom: 5,
    },
    info: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333333',
        marginBottom: 15,
    },
    editButton: {
        backgroundColor: '#007bff',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
    },
    editButtonText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
