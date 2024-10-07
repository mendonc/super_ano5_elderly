# super_ano5_elderly
Develepment of aplication to suport elderly people

** Instalação do React Nativi CLI (Não Expo) **

1- Instalar o Chocolatey (gerenciador de pacotes recomendado)
	
	- Abra o windows power shell como administrador
	- Execute o comando :
 
	Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))

2- Instalar o Noje Lts e JDK17 vIA Chocolatey
	-Abra o windows power shell como administrador
	-Execute o comando:

	choco install -y nodejs-lts microsoft-openjdk17	

3- Instalar o Android Studio ( Instalar a maquina virtual do android para emular)
	-https://developer.android.com/studio?hl=pt-br
	-Dê next em tudo. Em license Agreement aceite todos os pacotes android-sdk-licence e intel-android-extra-licence
	-Finish

4- Configurar o SDK do Android
	-Abra o Android Studio
	- Em Project - More Actions - SDK Manager: Va em 
		SDK Platforms e selecione:
		-Escolha a versão do Android que iremos utilizar
		SDK tools (se algum item abaixo ja estiver selecionado ou outro pacote padroa, nao modifique):
		-SDK build tools
		-SDK Plataforms - tools
		-Android Emulator
		-Intel x86 Emulator Accelerator ( Se seu processadore for AMD escolha o Andorid Emulator hypervisor)
		-Aperte OK

5- Criar um Emulador Android no Android Studio
	-Abra o Android Studio
	-EM More Actions - Virtual Device Manager:
		Create Virtual Device ( + )
		Escolha o Pixel 4 e de next
		Escolha a imagem S/ API 31 /Android 12
		OK
6- Definindo a Variavel de Ambiente do Android SDK
    -Va nas variaveis de Ambiente e defina uma nova variavel local (variavel de usuario)
    -Crie uma com o nome ANDROID_HOME  e caminho do seu SDK
    -Para achar o caminho do sdk vai no Android Studio em more actions/ SDK Manager e o caminho esta informado na parte superior

	agora va em PATH e crie um path  que aponte para platform-tools, ele fica dentro da pasta do sdk:
	C:\Users\SeuUsuario\AppData\Local\Android\Sdk\platform-tools (use o seu caminho)


Iniciar o Projeto
    -Entre na pasta Aplicativo
	-execute npm install para atualizar as dependencias
    -execute: npx react-native run-android (aguarde a instalação)
    -em outro terminal execute: npx react-native start



** Como utilizar a API**

1- Baixando as dependencias 

Certifique-se de ter o Python instalado no seu sistema.

Navegue até o diretório do projeto (api) e crie um ambiente virtual chamado venv:

Para Windows e LinuxUtilize o comando 
	python -m venv venv.

Após criar o ambiente virtual, ative-o com os seguintes comandos:

Para Windows Use 
	venv\Scripts\activate.
Para Linux/Mac Use 
	source venv/bin/activate.

Instale as dependências Execute o comando 

	pip install -r requirements.txt 

para instalar todas as dependências listadas no arquivo.

2- Configurando o banco

Primeiro baixe o mariaDB e instale no seu pc (no Windows há um programa e no linux e pelo prompt de comando - pesquisar)

	IMPORTANTE: defina a senha do root para 123456

Crie um banco chamado 'sep'


3- Criando as tabelas usando as migrations

Novamente na pasta api pelo terminal e com o venv ativado use o seguinte comando para criar as tabelas

	alembic upgrade head

4- Usando a API

Com tudo configurado para utilizar a api use o seguinte comando no terminal (na pasta api)

	uvicorn src.app:app --reload

Abra a url que aparecer no terminal, no navegador adicione /docs ao fim da url para ver o Swagger	


