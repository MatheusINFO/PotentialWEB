![alt text](./public/img/logo.png "PotentialCRUD")

>## Rotas utilizadas:
-  1. GET /developers (Listar todos desenvolvedores)
-  2. GET /developers? (Listar desenvolvedores de acordo com a querystring e paginado)
-  3. GET /developers/{id} (Retorna os dados de um desenvolvedor)
-  4. POST /developers (Adiciona um novo desenvolvedor)
-  5. PUT /developers/{id} (Atualiza os dados de um desenvolvedor)
-  6. DELETE /developers/{id} (Deleta um desenvolvedor)

>## Oque foi utilizado:
-  ReactJS, Context e Hooks (Construção da aplicação)
-  Eslint (Padronização de código)
-  Material-UI (Criação do GRID)
-  Testing-Library/react (Criação de testes)
-  Faker (Criação de dados fakes para os testes)
-  Docker (Criado para subir o banco e os servidor)

>## Como executar - Frontend:
(É necessário do docker instalado, o frontend irá usar a porta 3000)
-  git clone https://github.com/MatheusINFO/PotentialWEB.git (clone o repositório e vá até a pasta)
-  npm install (irá instalar as dependências, utilizei a v.7 do npm, caso precise para atualizar use npm i -g npm@latest)
-  npm run docker (irá fazer o build e chamar o docker-compose up )

>## Como executar - Testes
(Na pasta clona, execute os comandos)
- npm install (caso não tenha feito)
- npm run test (irá rodar todos os testes)