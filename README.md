# API Muralis

API dedicada ao teste requerido pela empresa Muralis, no qual foi solicitado para criar uma API para controle de gastos, em que consiste no usuário inserir as informações requeridas para inserção no banco de dados e para a consulta dos gastos referentes ao mês vigente.

## Iniciando a API

Comando para instalar todas as dependências
```
  npm install
```

Comando para iniciar a API
```
  npm run init:all
```

### URL
```
localhost:8080
```

## Documentação da API

#### Adiciona uma despesas

```http
  POST /api/expense
```

| Parâmetros   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `value` | `number` | Valor da despesa |
| `description` | `string` | Descrição da despesa |
| `date` | `string` | Data referente a despesa 'MM-DD-YYYY' |
| `typePaymentId` | `number` | Id do tipo de pagamento |
| `categoryId` | `number` | Id da categoria da despesa |

| Retorno   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `id` | `number` | Id da despesa recém adicionada no banco de dados |


#### Retorna todos os itens referentes ao mês corrente

```http
  GET /api/expense
```

| Retorno  | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `number` | Id da despesa |
| `value` | `number` | Valor da despesa |
| `description` | `string` | Descrição da despesa |
| `date` | `string` | Data referente a despesa |
| `typePaymentId` | `number` | Id do tipo de pagamento |
| `categoryId` | `number` | Id da categoria da despesa |


#### Url documentaçao feita no swagger

```http
  http://localhost:8080/api-docs
```
## Princípios

* Single Responsibility Principle (SRP)
* Open Closed Principle (OCP)
* Liskov Substitution Principle (LSP)
* Interface Segregation Principle (ISP)
* Dependency Inversion Principle (DIP)
* You Aren't Gonna Need It (YAGNI)
* Keep It Simple, Silly (KISS)

## Bibliotecas e Ferramentas

* Typescript
* Git
* NPM
* Eslint
* Express
* Module-alias
* Knex
* Mysql2
* Rimraf
