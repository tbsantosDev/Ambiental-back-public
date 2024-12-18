# Projeto Ambiental Backend

Este é o backend do projeto ambiental, desenvolvido em **Node.js** com **Sequelize** e **PostgreSQL**. O objetivo principal do projeto é gerenciar prazos de documentos, enviando alertas antes do vencimento, e permitir o upload de vídeos, como treinamentos.

## 📋 Pré-requisitos

Antes de começar, certifique-se de que sua máquina atende aos seguintes requisitos:

- [Node.js](https://nodejs.org/) (versão 16 ou superior recomendada)
- [NPM](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/)
- Um banco de dados PostgreSQL configurado

## ⚙️ Configuração

### 1. Variáveis de Ambiente

Configure as variáveis de ambiente necessárias no arquivo `.env`. Você pode usar o arquivo de exemplo `.env.example` como base:

### 2. Instalação das Dependências

Instale as dependências necessárias para o projeto com o seguinte comando:

```bash
npm install
```

_ou, se preferir utilizar Yarn:_

```bash
yarn install
```

### 3. Executar as Migrations e Seeders

Para configurar o banco de dados com as tabelas e dados iniciais, execute os comandos abaixo:

```bash
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all
```

### 4. Sincronizar Modelos com o Banco de Dados

Certifique-se de que os modelos estão sincronizados com o banco de dados.

```javascript
// Em algum ponto da inicialização do projeto
await sequelize.sync({ alter: true });
```

## ▶️ Executando o Projeto

Para iniciar o servidor, utilize o seguinte comando:

```bash
npm run dev
```

O backend estará disponível no endereço:

```
http://localhost:3002
```

## 🛠️ Tecnologias Utilizadas

- **[Node.js](https://nodejs.org/):** Ambiente de execução JavaScript.
- **[Sequelize](https://sequelize.org/):** ORM para Node.js.
- **[PostgreSQL](https://www.postgresql.org/):** Sistema de gerenciamento de banco de dados.
- **[Express](https://expressjs.com/):** Framework web para Node.js.

## 🚀 Deploy

Para realizar o deploy da aplicação, configure as variáveis de ambiente no ambiente de produção e utilize um gerenciador de processos como o [PM2](https://pm2.keymetrics.io/):

```bash
pm2 start npm --name "ambiental-backend" -- run dev
```

## 🤝 Contribuindo

Contribuições são bem-vindas! Se você deseja contribuir com o projeto, siga os passos abaixo:

1. Faça um fork do repositório.
2. Crie uma branch com sua feature ou correção: `git checkout -b minha-feature`.
3. Commit suas mudanças: `git commit -m 'Adicionei uma nova feature'`.
4. Faça um push para a branch: `git push origin minha-feature`.
5. Abra um pull request.

## 📝 Licença

Este projeto está licenciado sob a licença MIT. Consulte o arquivo `LICENSE` para mais informações.

---

Feito com ❤️ por [Thiago Santos](https://github.com/tbsantosDev).
