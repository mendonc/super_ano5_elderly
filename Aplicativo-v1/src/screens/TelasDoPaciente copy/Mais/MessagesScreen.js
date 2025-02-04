import React from 'react';
import { FlatList, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import mockMessages from './mockMessages';
import { useNavigation } from '@react-navigation/native';

export default function MessagesScreen() {
    const navigation = useNavigation();

    const renderMessageItem = ({ item }) => (
        <TouchableOpacity
            style={styles.messageContainer}
            onPress={() =>
                navigation.navigate('Conversa', {
                    patientId: item.id,
                    name: item.name,
                    chatHistory: item.chatHistory,
                })
            }
        >
            <View style={styles.messageContent}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.lastMessage}>{item.lastMessage}</Text>
            </View>
            <Text style={styles.time}>{item.lastMessageTime}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={mockMessages}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderMessageItem}
                ItemSeparatorComponent={() => <View style={styles.separator} />}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    messageContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
    },
    messageContent: {
        flex: 1,
        marginRight: 10,
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333333',
    },
    lastMessage: {
        fontSize: 14,
        color: '#777777',
        marginTop: 5,
    },
    time: {
        fontSize: 12,
        color: '#999999',
    },
    separator: {
        height: 1,
        backgroundColor: '#e0e0e0',
        marginHorizontal: 15,
    },
});
