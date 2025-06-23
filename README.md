# Projeto React: Cadastro de Usuários

Este projeto é uma aplicação web desenvolvida em ReactJS para o cadastro e listagem de usuários, consumindo uma API RESTful.

## Equipe

-  João Elias Annes de Assis 
-  Gabriel Burack Rosa

## Tecnologias Utilizadas

-   **Frontend**: ReactJS com Vite
-   **Requisições HTTP**: Axios
-   **Roteamento**: React Router DOM
-   **API Mock**: JSON Server
-   **Estilização**: CSS puro

## Descrição da API

A aplicação consome uma API REST local simulada com `json-server`.

**URL Base**: `http://localhost:3001`

### Endpoints

| Método | URL          | Ação                    |
|--------|--------------|-------------------------|
| `GET`    | `/users`     | Lista todos os usuários |
| `POST`   | `/users`     | Adiciona um novo usuário|
| `DELETE` | `/users/:id` | Deleta um usuário       |

## Como Executar o Projeto

1.  **Clone o repositório:**
    ```bash
    git clone [URL_DO_SEU_REPOSITORIO]
    cd nome-do-repo
    ```

2.  **Inicie a API:**
    * (Opcional, se incluir a pasta da API no repo) Navegue para a pasta `api-projeto-react`.
    * Instale e execute o `json-server`:
    ```bash
    npx json-server --watch db.json --port 3001
    ```

3.  **Inicie a Aplicação React:**
    * Abra um novo terminal e navegue para a pasta do frontend (`meu-app-react`).
    * Instale as dependências:
    ```bash
    npm install
    ```
    * Execute a aplicação:
    ```bash
    npm run dev
    ```

4.  Abra `http://localhost:5173` (ou a porta indicada pelo Vite) no seu navegador.
