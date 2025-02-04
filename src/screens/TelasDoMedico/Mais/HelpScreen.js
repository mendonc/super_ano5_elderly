import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    FlatList,
    StyleSheet,
    KeyboardAvoidingView,
    Platform,
} from 'react-native';

export default function HelpScreen() {
    const [messages, setMessages] = useState([
        {
            id: 1,
            text: 'Olá! Por favor, descreva o problema que você está enfrentando e vamos analisá-lo.',
            sender: 'assistant',
        },
    ]);
    const [userMessage, setUserMessage] = useState('');

    const handleSendMessage = () => {
        if (userMessage.trim() === '') return;

        // Adicionar a mensagem do usuário
        const newMessage = {
            id: messages.length + 1,
            text: userMessage,
            sender: 'user',
        };
        setMessages((prevMessages) => [...prevMessages, newMessage]);
        setUserMessage('');

        // Resposta automática do assistente
        setTimeout(() => {
            const assistantResponse = {
                id: messages.length + 2,
                text: 'Obrigado por nos informar! Vamos analisar seu problema e entraremos em contato em breve.',
                sender: 'assistant',
            };
            setMessages((prevMessages) => [...prevMessages, assistantResponse]);
        }, 1500);
    };

    const renderMessageItem = ({ item }) => (
        <View
            style={[
                styles.messageContainer,
                item.sender === 'user' ? styles.userMessage : styles.assistantMessage,
            ]}
        >
            <Text
                style={[
                    styles.messageText,
                    item.sender === 'user' ? styles.userMessageText : styles.assistantMessageText,
                ]}
            >
                {item.text}
            </Text>
        </View>
    );

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        >
            <FlatList
                data={messages}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderMessageItem}
                contentContainerStyle={styles.chatContainer}
            />
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    value={userMessage}
                    onChangeText={setUserMessage}
                    placeholder="Digite sua mensagem..."
                    placeholderTextColor="#555" // Cinza mais escuro para legibilidade
                />
                <TouchableOpacity style={styles.sendButton} onPress={handleSendMessage}>
                    <Text style={styles.sendButtonText}>Enviar</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    chatContainer: {
        padding: 10,
    },
    messageContainer: {
        padding: 10,
        borderRadius: 8,
        marginBottom: 10,
        maxWidth: '80%',
    },
    userMessage: {
        alignSelf: 'flex-end',
        backgroundColor: '#007bff',
    },
    assistantMessage: {
        alignSelf: 'flex-start',
        backgroundColor: '#f1f1f1',
    },
    messageText: {
        fontSize: 14,
    },
    userMessageText: {
        color: '#ffffff',
    },
    assistantMessageText: {
        color: '#333333', // Cinza escuro para melhorar a legibilidade
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderTopWidth: 1,
        borderTopColor: '#e0e0e0',
    },
    input: {
        flex: 1,
        height: 40,
        borderWidth: 1,
        borderColor: '#cccccc',
        borderRadius: 5,
        paddingHorizontal: 10,
        fontSize: 14,
        backgroundColor: '#f9f9f9',
        color: '#333333', // Cinza escuro para texto digitado
    },
    sendButton: {
        marginLeft: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: '#007bff',
        borderRadius: 5,
    },
    sendButtonText: {
        color: '#ffffff',
        fontSize: 14,
        fontWeight: 'bold',
    },
});
