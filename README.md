<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Descrição

Essa API foi feita para simular o backend de uma rede social. A API possui um crud completo de usuários e de posts que estão relacionados a um usuário,
possui também autenticação de login e nivel de autorização.

## Tecnologias Utilizadas

- Node.js
- Nest
- Prisma
- PostgreSQL
- jwt
- bcryptjs
- Typescript


## Instalação

Siga os passos abaixo para poder rodar a aplicação no seu servidor local:

1. Clone este repositório para sua máquina

2. Com o projeto aberto, crie um arquivo chamado `.env` na raiz do projeto, fora da pasta src e 
defina as variaveis de ambiente para se conectar ao seu banco de dados e sua chave secreta. 
certifique-se de ter criado anteriormente o banco de dados que vai ser utilizado.

```
DATABASE_URL= postgresql://johndoe:randompassword@localhost:5432/mydb?schema=public
SECRET_KEY= string
```

3. Rode o comando abaixo para instalar todas as dependencias:

```
npm install
```

4. Agora rode o comando abaixo para gerar as migrações:

```
npx prisma migrate dev
```

5. Rode um dos 2 comandos abaixo para iniciar no seu servidor local:


```
npm run start
```


```
npm run start:dev
```

## Endpoints
<br/>

| Método | Endpoint       | Responsabilidade                       | Autenticação                           |
| ------ | ---------------| ---------------------------------------| -------------------------------------- |
| POST   |  /users        | cadastrar um usuário                   | qualquer usuário
| GET    |  /users        | buscar todos usuários                  | qualquer usuário
| GET    |  /users/:id    | buscar usuário por id                  | somente dono da conta 
| PUT    |  /users/:id    | atualizar informações do usuário       | somente dono da conta
| DELETE |  /users/:id    | excluir usuário                        | somente dono da conta

<br/>

| Método | Endpoint       | Responsabilidade                       | Autenticação                           |
| ------ | ---------------| ---------------------------------------| -------------------------------------- |
| POST   | /auth/login    | iniciar sessão                         | somente usuário ja criado no banco 

<br/>

| Método | Endpoint       | Responsabilidade                       | Autenticação                           |
| ------ | ---------------| ---------------------------------------| -------------------------------------- |
| GET    | /posts         | buscar todos os posts                  | qualquer usuário 
| POST   | /posts         | criar post                             | somente usuário logado
| GET    | /posts/:id     | buscar por post específico             | qualquer usuário 
| PUT    | /posts/:id     | atualizar informações do post          | somente dono da conta
| DELETE | /posts/:id     | excluir post                           | somente dono da conta

## Documentação

- com o servidor rodando você pode acessar a documentação pelo swagger no endereço: localhost:3000/api


## License

Nest is [MIT licensed](LICENSE).
