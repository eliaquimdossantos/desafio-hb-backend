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
Você pode utilizar o script **create-tables.sql** presente na raíz do projeto

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

### 🚀 Produção
Rodar o servidor em produção:
```sh
npm run build
npm run start:prod
```
