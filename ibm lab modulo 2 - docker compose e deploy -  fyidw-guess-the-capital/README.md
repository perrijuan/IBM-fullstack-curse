
# **Registro de Tarefa: Deploy de Aplicação com Docker e IBM Code Engine**  

## **Descrição da Tarefa**  
A tarefa consistiu em realizar as etapas de clonagem do código-fonte, criação da imagem Docker, deploy local, envio da imagem para o IBM Cloud e deploy final no IBM Code Engine.

---

## **Etapas Realizadas**  

### **1. Clone do Código-Fonte**  
- Clonei o repositório do projeto:  
  ```bash
  git clone https://github.com/usuario/repositorio.git
  cd repositorio
  ```

---

### **2. Construção da Imagem Docker**  
- Criei a imagem Docker utilizando o arquivo `Dockerfile`:  
  ```bash
  docker build -t nome-imagem:tag .
  ```

---

### **3. Deploy Local no Docker**  
- Iniciei o contêiner localmente para validação:  
  ```bash
  docker run -d -p 8080:80 nome-imagem:tag
  ```
- Verifiquei o funcionamento acessando `http://localhost:8080`.  

---

### **4. Tag e Push para IBM Cloud**  
- Configurei o registro no IBM Cloud:  
  ```bash
  ibmcloud login
  ibmcloud cr login
  ```
- Marquei a imagem para o repositório da IBM Cloud:  
  ```bash
  docker tag nome-imagem:tag <registro-ibm-cloud>/nome-imagem:tag
  ```
- Enviei a imagem para o IBM Cloud:  
  ```bash
  docker push <registro-ibm-cloud>/nome-imagem:tag
  ```

---

### **5. Deploy no IBM Code Engine**  
- Criei um projeto no IBM Code Engine.  
- Implantei a aplicação:  
  ```bash
  ibmcloud ce application create --name nome-aplicacao --image <registro-ibm-cloud>/nome-imagem:tag --port 80
  ```
- Verifiquei o status do serviço:  
  ```bash
  ibmcloud ce application get --name nome-aplicacao
  ```

