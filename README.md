## 📝 Blog CRUD Full-Stack
Este projeto é uma aplicação web full-stack com funcionalidades completas de CRUD (Create, Read, Update, Delete) para posts de blog, consumindo uma API RESTful.

## 🚀 Funcionalidades
### Frontend (Interface do Usuário)
Listagem de Posts: Visualização de todos os posts publicados

Criação de Posts: Formulário para criar novos posts

Autoria: Cada post mostra o autor que o publicou

Exclusão de Posts: Opção para deletar posts individualmente

Navegação: Interface intuitiva com botões de ação claros

### Backend (API)
API RESTful: Endpoints para operações CRUD

Operações Disponíveis:

GET /posts - Listar todos os posts

POST /posts - Criar um novo post

DELETE /posts/:id - Excluir um post específico

Autenticação Simples: Sistema básico de identificação de autores

### 📖 Como Usar
Criando um Post
Clique no botão "CRIAR POST"

Preencha o conteúdo do post

Informe seu nome de usuário

Clique em publicar

Visualizando Posts
Todos os posts são listados na página principal

Cada post mostra:

Conteúdo do post

Autor

Data de publicação

Botão de exclusão (apenas para o autor)

Excluindo um Post
Localize o post que deseja excluir

Clique no botão "DELETAR"

Confirme a exclusão

Saindo da Aplicação
Clique no botão "SAIR" para encerrar a sessão

## 🗂️ Estrutura do Projeto
```
blog-crud-fullstack/
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   └── middleware/
│   ├── package.json
│   └── server.js
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── services/
│   │   ├── styles/
│   │   └── App.js
│   └── package.json
└── README.md
🔌 Endpoints da API
Posts
GET /api/posts - Retorna todos os posts

GET /api/posts/:id - Retorna um post específico

POST /api/posts - Cria um novo post

DELETE /api/posts/:id - Exclui um post
```


## Autores
 - Hélio Ferreira
 - Guilherme Salatiel
 - Oscar Lara
