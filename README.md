# MB Labs -NodeJS Challenge 20201030

<p>Desafio de construção de uma API em Node.js utilizando dados do projeto Open Food Facts, um banco de dados aberto com informação nutricional de diversos produtos alimentícios.</p>

***

## :computer:	 Tecnologias e Conceitos

- Node.js
- Express.js
- TypeScript
- Jest
- API REST
- Arquitetura em camadas

***

## :rocket: Endpoints

```yml
GET /
    - Rota para obter detalhes da API, se conexão leitura e escritura com a base de dados está OK, horário da última vez que o CRON foi executado, tempo online e uso de memória.
    - params: {}
    - query: {}
    - body: {}
```

```yml
GET /products?limit={VALUE}&offset={VALUE}
    - Rota para obter listar de todos os produtos da base de dados.
    - params: {}
    - query: {
      "limit": número de produtos que deseja receber na request,
      "offset": offset de paginação dos produtos
    }
    - body: {}
```

```yml
GET /products/:code
    - Rota para obter a informação somente de um produto da base de dados.
    - params: {
      "code": código do produto buscado
    }
    - query: {}
    - body: {}
```

```yml
PUT /products/:code
    - Rota para atualizar a informação de um produto da base de dados.
    - params: {
      "code": código do produto a ser atualizado
    }
    - query: {}
    - body: {
      "{PROPRIEDADE}": "{VALOR}" -> um ou mais propriedades e o valor que desja atualizar do schema do produto 
    }
```

```yml
DELETE /products/:code
    - Rota para deletar um produto da base de dados.
    - params: {
      "code": código do produto que deseja deletar
    }
    - query: {}
    - body: {}
```

***

## 🏁 Rodando a aplicação

Primeiramente, clone este repositório para sua máquina local.

```
git clone https://github.com/GuilhermeCRB/MBLabs_Challenge.git
```

### Back end

Para iniciar o servidor, rode o seguinte comando no terminal para instalar as dependências:

```
npm install
```

Em seguida, gere o modelo do banco de dados com o Prisma

```
npx prisma generate
```
Depois, faça o build do código TypeScript

```
npm run build
```

Por fim, basta iniciar o sevidor

```
npm start
```


