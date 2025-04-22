# Serviço de Clientes e Restaurantes

Este projeto implementa um serviço básico de cadastro e gerenciamento de clientes e restaurantes utilizando Node.js, Express e armazenamento de dados em arquivos JSON. O objetivo é permitir a criação de usuários (clientes) e restaurantes, além de autenticação e listagem de dados.

## Funcionalidades

- **Cadastro de Clientes**: Permite o cadastro de usuários (clientes).
- **Cadastro de Restaurantes**: Permite o cadastro de restaurantes.
- **Login**: Autenticação simples via e-mail e senha.
- **Listagem de Dados**: Listagem de usuários e restaurantes cadastrados.
  
## Estrutura do Projeto

- **server.js**: Arquivo principal que configura o servidor e as rotas.
- **public/**: Contém o frontend em HTML e CSS.
- **db/**: Contém os arquivos JSON (`users.json` e `restaurants.json`) que armazenam os dados de clientes e restaurantes.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript.
- **Express**: Framework para construir APIs REST.
- **Cors**: Middleware para permitir requisições de outros domínios.
- **Body-Parser**: Middleware para analisar o corpo das requisições HTTP.

## Como Rodar o Projeto

1. Clone este repositório:

```bash
git clone https://github.com/seu-usuario/servico-clientes-restaurantes.git
Instale as dependências:

bash
Copiar
Editar
cd servico-clientes-restaurantes
npm install
Inicie o servidor:

bash
Copiar
Editar
npm run dev
O servidor estará rodando na porta 3000. Você pode acessar as páginas de cadastro e listagem de clientes e restaurantes no navegador.

Endpoints da API
1. Cadastrar Usuário (Cliente)
Método: POST

URL: /users/register

Exemplo de Requisição:

bash
Copiar
Editar
POST /users/register
Content-Type: application/json

{
  "name": "João Silva",
  "email": "joao@email.com",
  "password": "senha123"
}
Resposta:

json
Copiar
Editar
{
  "id": 1618909387461,
  "name": "João Silva",
  "email": "joao@email.com",
  "password": "senha123"
}
2. Cadastrar Restaurante
Método: POST

URL: /restaurants/register

Exemplo de Requisição:

bash
Copiar
Editar
POST /restaurants/register
Content-Type: application/json

{
  "name": "Restaurante Saboroso",
  "email": "restaurante@email.com"
}
Resposta:

json
Copiar
Editar
{
  "id": 1618909500176,
  "name": "Restaurante Saboroso",
  "email": "restaurante@email.com"
}
3. Login de Usuário
Método: POST

URL: /login

Exemplo de Requisição:

bash
Copiar
Editar
POST /login
Content-Type: application/json

{
  "email": "joao@email.com",
  "password": "senha123"
}
Resposta:

json
Copiar
Editar
{
  "message": "Login bem-sucedido",
  "user": {
    "id": 1618909387461,
    "name": "João Silva",
    "email": "joao@email.com",
    "password": "senha123"
  }
}
4. Listar Usuários
Método: GET

URL: /db/users.json

Resposta:

json
Copiar
Editar
[
  {
    "id": 1618909387461,
    "name": "João Silva",
    "email": "joao@email.com",
    "password": "senha123"
  }
]
5. Listar Restaurantes
Método: GET

URL: /db/restaurants.json

Resposta:

json
Copiar
Editar
[
  {
    "id": 1618909500176,
    "name": "Restaurante Saboroso",
    "email": "restaurante@email.com"
  }
]
Estrutura de Arquivos
plaintext
Copiar
Editar
├── db/
│   ├── users.json         # Dados de usuários
│   └── restaurants.json   # Dados de restaurantes
├── public/
│   ├── index.html         # Página de cadastro de cliente
│   ├── restaurante.html   # Página de cadastro de restaurante
│   ├── usuarios.html      # Página para listar os usuários cadastrados
│   ├── restaurantes.html  # Página para listar os restaurantes cadastrados
│   ├── style.css          # Arquivo de estilos
├── server.js              # Arquivo do servidor
└── package.json           # Dependências e scripts do projeto
Licença
Este projeto é de código aberto sob a licença MIT.