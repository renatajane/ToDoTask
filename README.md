# To-Do List Application

## Descrição

Este projeto é uma aplicação de lista de tarefas (To-Do List) que inclui uma API backend desenvolvida em C# com .NET Core, um script de manipulação de dados em Python, e uma aplicação frontend desenvolvida em React. A aplicação permite criar, listar, atualizar, deletar e marcar tarefas como concluídas, bem como exportar tarefas não concluídas para um arquivo CSV.

## Estrutura do Projeto

1. **Backend (C#)**
   - **API RESTful**: Implementa funcionalidades para gerenciar tarefas.
   - **Banco de Dados**: PostgreSQL para armazenamento das tarefas.

2. **Manipulação de Dados (Python)**
   - **Script**: Manipula e exporta dados do banco de dados.

3. **Frontend (React)**
   - **SPA**: Interface de usuário para interação com a API.

## Parte 1: Backend (C#)

### Configuração

1. **API**
   - **Criar Tarefa**: `POST /api/tasks` - Adiciona uma nova tarefa.
   - **Listar Tarefas**: `GET /api/tasks` - Retorna todas as tarefas.
   - **Obter Tarefa por ID**: `GET /api/tasks/{id}` - Retorna uma tarefa específica.
   - **Atualizar Tarefa**: `PUT /api/tasks/{id}` - Atualiza uma tarefa existente.
   - **Excluir Tarefa**: `DELETE /api/tasks/{id}` - Deleta uma tarefa.
   - **Marcar Tarefa como Concluída**: `PATCH /api/tasks/{id}/complete` - Marca uma tarefa como concluída.

2. **Banco de Dados**
   - Use PostgreSQL.
   - Tabela `tasks` com os campos `id`, `title`, `description`, `completed`, `created_at`, e `updated_at`.

### Execução

1. **Clone o repositório:**
   - git clone https://github.com/usuario/repo-backend.git

2. **Execute o Docker Compose:**
   - docker-compose up

3. **Navegue até o diretório do frontend e execute o aplicativo:**
   - npm install
   - npm start

4. **Crie tarefas através da interface**

5. **Para executar o script Python, navegue até o diretório onde o script está localizado e execute:**
   - python script.py
