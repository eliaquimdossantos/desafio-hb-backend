# Projeto NestJS com Prisma

![Diagrama ERD](/img/ERD.png)

## 📜 Sobre o Projeto
Este projeto utiliza **NestJS** (utilizando **Typescript**) como framework backend e **Prisma ORM** para gerenciamento do banco de dados.

---

## 🚀 Scripts
Abaixo estão os principais scripts utilizados para desenvolvimento e gerenciamento do projeto.

### 🏗️ Instalação
Instale as dependências do projeto:
```sh
npm install
```

### 🌱 Configuração do Banco de Dados (Postgres)
Criação do arquivo **.env** com as configurações do banco de dados:
```sh
DATABASE_URL="postgresql://usuario:senha@localhost:5432/nome_do_banco"
```

### 🔄 Executando Migrações
## 🛠️ Banco de Dados com Prisma

### 🔄 Migration

Para executar as migrations e atualizar o banco de dados, use o seguinte comando:

```sh
npx prisma migrate dev
```

Este comando cria ou atualiza as tabelas do banco de dados conforme o esquema definido no arquivo `schema.prisma`.

### 🌱 Seed

Para popular o banco de dados com dados iniciais, você pode rodar o comando de seed:

```sh
npx prisma db seed
```

Este comando irá executar o script de seed configurado no arquivo `prisma/seed.ts` para inserir dados padrão no banco.


Gerar o cliente Prisma:
```sh
npx prisma generate
```

### 📊 Visualizar Banco de Dados
Executar a interface do Prisma Studio:
```sh
npx prisma studio
```

### 🛠️ Desenvolvimento
Rodar o servidor em modo desenvolvimento:
```sh
npm run start:dev
```

- O servidor estará disponível em http://1270.0.0.1/api/v1

### 🚀 Produção
Rodar o servidor em produção:
```sh
npm run build
npm run start:prod
```

- O servidor estará disponível em http://1270.0.0.1/api/v1