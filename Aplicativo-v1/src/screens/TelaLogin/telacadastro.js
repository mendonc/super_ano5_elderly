import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert, Modal, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import CheckBox from "@react-native-community/checkbox"; // Usando o pacote correto
import LogoPrincipal from "../../assets/LogoPrincipal.svg";

export default function CadastroScreen() {
  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false); // Estado para o CheckBox
  const [isModalVisible, setIsModalVisible] = useState(false); // Estado para mostrar o Modal
  const navigation = useNavigation();

  const handleCadastro = () => {
    if (!name || !cpf || !email || !password) {
      Alert.alert("Erro", "Todos os campos são obrigatórios");
      return;
    }

    if (!isChecked) {
      Alert.alert("Erro", "Você deve aceitar a política de privacidade");
      return;
    }

    const userData = {
      username: name.trim(),
      password: password.trim(),
      cpf: cpf.trim(),
      email: email.trim(),
      linked_user_id: "",
    };

    console.log("📤 Enviando dados para ProfileSelectionScreen:", userData); // Debug

    if (!userData.username || !userData.cpf || !userData.password) {
      Alert.alert("Erro", "Houve um erro ao coletar os dados.");
      return;
    }

    navigation.navigate("ProfileSelectionScreen", { userData }); // Envia os dados
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <LogoPrincipal width={400} height={400} />
      </View>
      <Text style={styles.title}>Cadastro</Text>

      <TextInput style={styles.input} placeholder="Nome Completo" placeholderTextColor="#3468bb" value={name} onChangeText={setName} />
      <TextInput style={styles.input} placeholder="CPF" placeholderTextColor="#3468bb" value={cpf} onChangeText={setCpf} keyboardType="numeric" />
      <TextInput style={styles.input} placeholder="E-mail" placeholderTextColor="#3468bb" value={email} onChangeText={setEmail} keyboardType="email-address" />
      <TextInput style={styles.input} placeholder="Senha" placeholderTextColor="#3468bb" value={password} onChangeText={setPassword} secureTextEntry />

      {/* Caixa de seleção para política de privacidade */}
      <View style={styles.checkboxContainer}>
        <CheckBox
          value={isChecked}
          onValueChange={setIsChecked}
          style={styles.checkbox}
          tintColors={{ true: "#3073c5", false: "#b0c4de" }} // Cor de checkbox marcada/desmarcada
        />
        <Text style={styles.checkboxText}>
          Eu aceito a{" "}
          <Text
            style={styles.linkText}
            onPress={() => setIsModalVisible(true)} // Abre o modal com a política
          >
            Política de Privacidade
          </Text>
        </Text>
      </View>

      {/* Botão de Cadastro, desabilitado caso a checkbox não esteja marcada */}
      <TouchableOpacity
        style={[styles.button, !isChecked && styles.disabledButton]} // Aplica o estilo de desabilitado
        onPress={handleCadastro}
        disabled={!isChecked} // Desabilita o botão se a checkbox não estiver marcada
      >
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>

      {/* Modal com a política de privacidade */}
      <Modal
        transparent={true}
        visible={isModalVisible}
        animationType="slide"
        onRequestClose={() => setIsModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
              <Text style={styles.modalTitle}>Política de Privacidade</Text>
              <Text style={styles.date}>Última atualização: 28 de março de 2025</Text>

              <Text style={styles.sectionTitle}>1. Coleta de Informações</Text>
              <Text style={styles.text}>Coletamos informações pessoais que você nos fornece diretamente, como:</Text>
              <Text style={styles.text}>- Nome completo</Text>
              <Text style={styles.text}>- Endereço de e-mail</Text>
              <Text style={styles.text}>- CPF (Cadastro de Pessoa Física)</Text>
              <Text style={styles.text}>- Senha de acesso</Text>

              <Text style={styles.text}>Além disso, podemos coletar informações automaticamente através do uso do Aplicativo, tais como:</Text>
              <Text style={styles.text}>- Endereço de IP</Text>
              <Text style={styles.text}>- Dados de localização</Text>
              <Text style={styles.text}>- Informações sobre o dispositivo (modelo, sistema operacional, etc.)</Text>

              <Text style={styles.sectionTitle}>2. Uso das Informações</Text>
              <Text style={styles.text}>As informações coletadas são utilizadas para:</Text>
              <Text style={styles.text}>- Processar seu cadastro e fornecer os serviços do Aplicativo.</Text>
              <Text style={styles.text}>- Enviar notificações importantes sobre o uso do Aplicativo.</Text>
              <Text style={styles.text}>- Melhorar a experiência do usuário e funcionalidades do Aplicativo.</Text>
              <Text style={styles.text}>- Realizar análises internas para aprimorar os serviços.</Text>

              <Text style={styles.sectionTitle}>3. Compartilhamento de Informações</Text>
              <Text style={styles.text}>Nós não compartilhamos suas informações pessoais com terceiros, exceto nas seguintes situações:</Text>
              <Text style={styles.text}>- Para o cumprimento de obrigações legais ou regulatórias.</Text>
              <Text style={styles.text}>- Para proteger nossos direitos, propriedade ou segurança, ou os direitos, propriedade ou segurança de outros usuários.</Text>

              <Text style={styles.sectionTitle}>4. Armazenamento e Segurança</Text>
              <Text style={styles.text}>Armazenamos suas informações pessoais em servidores protegidos e tomamos medidas de segurança adequadas para prevenir acesso não autorizado, alteração, divulgação ou destruição dessas informações. No entanto, nenhum método de transmissão ou armazenamento de dados é 100% seguro, e não podemos garantir a segurança absoluta.</Text>

              <Text style={styles.sectionTitle}>5. Seus Direitos</Text>
              <Text style={styles.text}>Você tem o direito de acessar, corrigir ou excluir as informações pessoais que possuímos sobre você. Caso deseje exercer esses direitos, entre em contato conosco através do e-mail contato@plussaudebrasil.com.</Text>

              <Text style={styles.sectionTitle}>6. Alterações nesta Política de Privacidade</Text>
              <Text style={styles.text}>Podemos atualizar esta Política de Privacidade de tempos em tempos. Quando fizermos alterações substanciais, você será notificado através do Aplicativo ou por outros meios. Recomendamos que você reveja periodicamente esta política para se manter informado sobre como protegemos suas informações.</Text>

              <Text style={styles.sectionTitle}>7. Contato</Text>
              <Text style={styles.text}>Se você tiver dúvidas ou preocupações sobre esta Política de Privacidade, entre em contato conosco através do e-mail: contato@plussaudebrasil.com ou pelo telefone: +55 (92) 99999-9999.</Text>
            </ScrollView>
            <TouchableOpacity style={styles.closeButton} onPress={() => setIsModalVisible(false)}>
              <Text style={styles.closeButtonText}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20, backgroundColor: "#ffffff" },
  title: { fontSize: 24, fontWeight: "bold", textAlign: "center", marginBottom: 20, color: "#307cca" },
  input: { height: 40, borderColor: "#3468bb", borderWidth: 1, marginBottom: 10, paddingHorizontal: 10, borderRadius: 5, color: "#3468bb" },
  button: { backgroundColor: "#d7e3f0", padding: 10, borderRadius: 5, alignItems: "center", marginTop: 10 },
  buttonText: { color: "#3073c5", fontSize: 16, fontWeight: "bold" },
  disabledButton: { backgroundColor: "#b0c4de" }, // Estilo para o botão desabilitado (mais transparente)
  logoContainer: {
    padding: 1,
    top: -50,
    marginHorizontal: -50,
    marginVertical: -170,
    position: "relative",
    justifyContent: "center",
    alignItems: "center"
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
    
  },
  checkbox: {
    marginRight: 10,
    borderWidth: 1, 
    borderColor: "#3468bb", 
    backgroundColor: "#b0c4de", // Adiciona cor de fundo cinza
  },
  checkboxText: {
    fontSize: 14,
    color: "#3468bb",
  },
  linkText: {
    color: "#3073c5",
    textDecorationLine: "underline",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    width: "90%",
    maxHeight: "80%",
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
    color: "#3073c5",
  },
  sectionTitle: {
    fontWeight: "bold",
    marginTop: 10,
    fontSize: 16,
    color: "#3073c5",
  },
  text: {
    fontSize: 14,
    color: "#333",
    marginBottom: 10, // Adiciona espaço entre os parágrafos
  },
  date: {
    fontStyle: "italic",
    fontSize: 12,
    color: "#777",
    marginBottom: 10,
  },
  closeButton: {
    marginTop: 10,
    backgroundColor: "#3073c5",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  closeButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  scrollViewContent: {
    paddingBottom: 20,
  },
});

