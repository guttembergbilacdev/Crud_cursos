import sqlite3 from 'sqlite3';

const db = new sqlite3.Database ('Database.sqlite', 
    (err) => {
        if (err) {
            console.err ("Erro ao Conectar ao Banco de dados: ", err.message);
        } else {
            console.log ("Conectado ao Banco de dados: ")
            
        }
    });

    export default db;

  /*  # Cria o package.json com valores padrão (sem perguntas)
npm init -y

# Instala e já registra em "dependencies" do package.json
npm install express sqlite3

# Ferramenta só para desenvolvimento (reinicia o servidor ao salvar)
npm install --save-dev nodemon

{
  "name": "api-cursos",
  "version": "1.0.0",
  "description": "API RESTful de CRUD de cursos",
  "main": "server.js",
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js"
  },
  "keywords": ["api", "crud", "express"],
  "author": "Uanderson",
  "license": "ISC",
  "dependencies": {
    "express": "^4.19.2",
    "sqlite3": "^5.1.7"
  },
  "devDependencies": {
    "nodemon": "^3.1.0"
  }
}

para rodar o sistema 
node index.js
  */