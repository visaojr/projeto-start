## Requisitos
- Node JS (Última versão estável LTS)
- Postgres (Recomendo container Docker)
## **Configurando o projeto**
1. Clique no botão **use this template**.
2. Digite o nome do repositório e o mantenha como público.
3. Aguarde que o repositório será criado.
4. Clone o repositório localmente.
5. Execute o comando ```yarn``` ou ```npm install```para instalar as dependências.
6. Nas pastas models, repositories e services altere os exemplos para as classes e atributos que você irá utilizar.
7. Antes de executar prossiga com a configuração do banco de dados.
## **Banco de dados**
### **Instalação do docker**
- Pré-requisitos
  - Windows
    - Microsoft Windows 10 Professional ou Enterprise 64-bit

Caso tenha os pré-requisitos instale por meio do link:
https://hub.docker.com/editions/community/docker-ce-desktop-windows

Para verificar se o docker foi instalado corretamente rode no terminal docker:

``docker version``

Para outras versões ou outros sistemas operacionais, favor consultar a documentação do docker.

### **Criando um container**
1. Com o docker instalado na sua máquina execute o seguinte comando:
```
$ docker run --name postgres -e POSTGRES_PASSWORD=suasenha -p 5432:5432 -d postgres
```

2. Depois inicialize o container com o comando ```docker start postgres```.


### **Conectando o Postgres ao DBeaver**
1. Instale o DBeaver https://dbeaver.io/download/
2. Abra o DBeaver vá em file > New > Database Connection
3. Selecione PostgreSQL
4. Preencha os seguintes campos com os dados:

    - Host: localhost
    - Port: 5432
    - Database: postgres
    - username: postgres
    - password: *sua senha*
5. Feito isso dê um clique em Finish.
6. Tudo certo, sua conexão já está configurada no DBeaver.

### **Criando o banco de dados no DBeaver**
Para criar um novo banco de dados abra um novo script no DBeaver e digite
```create database nomedoBanco``` e pressione ENTER.

### **Configurando o TypeORM**

Agora vamos configurar a conexão com o banco de dados, vamos utilizar o TypeORM para fazer as configurações, adicionar tabelas e realizar todas as operações dentro do banco de dados.

1. No arquivo ormconfig.json altere o username e o password conforme o que foi criado.
2. Digite um nome para a database.
3. Após isso rode o comando ```yarn dev:server```.
4. Se não der nenhum erro é que o banco de dados está funcionando.

### **Criando tabelas**
1. Para criar uma migration:
```
yarn typeorm migration:create -n NomeDaMigration
```
2. Este arquivo deve ser criado dentro da pasta migrations.

3. Para executar as migrations:
```
yarn typeorm migration:run
```
4. Desfazer e alterar uma migration:
```
yarn typeorm migration:revert
```
**Você só poderá alterar uma migration se ela ainda não tiver sido enviada para o Git, caso contrário você deverá criar uma nova migration e realizar as alterações.**

5. Para visualizar as migrations que já foram executadas, você poderá executar o comando:
```
yarn typeorm migration:show
```
Para mais informações consulte a documentação do TypeORM: https://typeorm.io

6. Agora iremos configurar os models criados anteriormente, para que eles estejam conectados as tabelas que foram criadas.
7. Agora precisaremos fazer algumas coisas nos repositórios, services e rotas.
8. Depois destas alterações você já conseguirá passar dados para o banco de dados.





