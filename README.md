# Projeto: API de Produtos e Tarefas

### Estudante: Gabriel Borges de Araujo  
### Data: 14 de abril de 2025  
### Aula: Tutorial back-end

---

## ✅ Funcionalidades implementadas:

### 🛒 Endpoint PATCH `/produtos/:id`
Atualiza **parcialmente** os dados de um produto (nome ou preço).

### ✅ CRUD completo para o modelo `Tarefa`:
- `GET /tarefas`
- `GET /tarefas/:id`
- `POST /tarefas`
- `PUT /tarefas/:id`
- `PATCH /tarefas/:id`
- `DELETE /tarefas/:id`

---

## 📝 Modelo de Tarefa:
```json
{
  "id": 1,
  "descricao": "Fazer tarefa de back-end",
  "concluida": false,
  "prazo": "2025-04-20"
}


## ▶️ Como Rodar o Projeto

1. Clone este repositório ou copie os arquivos para sua máquina local.
   
   Se você já tem o Git instalado, pode rodar esse comando no terminal:
   ```bash
   git clone https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git

2. Instale as dependências do projeto: Navegue até a pasta do projeto e execute o seguinte comando no terminal:

bash
Copiar
Editar

npm install

3. Inicie o servidor: Após instalar as dependências, inicie o servidor com o comando:

node index.js

4. Acesse a API: Com o servidor rodando, abra o navegador e vá para:

http://localhost:3000

Você verá a mensagem: API de Produtos e Tarefas funcionando! 🚀.

💡 Exemplos de Testes (via Insomnia ou Postman)
Criar tarefa (POST /tarefas)
Use o seguinte corpo de requisição para criar uma nova tarefa:
{
  "descricao": "Estudar para a prova",
  "concluida": false,
  "prazo": "2025-04-20"
}

Atualizar preço de produto (PATCH /produtos/1)
Use o seguinte corpo de requisição para atualizar o preço de um produto:
{
  "preco": 89.99
}

📁 Estrutura do Projeto
bash
Copiar
Editar

tarefa-backend/
│
├── index.js          # Código principal da aplicação
├── package.json      # Configuração do projeto Node
├── README.md         # Este arquivo

✨ Autor
Feito com 💻 por Gabriel Borges de Araujo
Aluno da aula de back-end — 14 de abril de 2025
