para executar o sistema:
 
 1 - execute um emulador de bando de dados exemplo: xampp, wampp..

 2 - crie um banco de dados mysql com o nome db_galeira

3 - dentro do banco db_galeira, execute o seguinte script para criar a tabela de registro:

create table galeria (
    id_galeria integer unsigned not null auto_increment,
    titulo varchar(255) null,
    caminho text null,
    primary key(id_galeria)
);

4 -depois usando um prompt de comando, vai até na pasta do projeto e entre dentro da pasta rest-api, depois execute o comando: node api.js

5 - execute outro prompt de comando, vá até a pasta do projeto, entre dentro da pasta web-app, depois execute o comando: npm install e depois para subir o servidor angular execute o comando: ng serve

depois no seu navegador digite na url: localhost:4200 e o projeto já vai estar sendo executado.
