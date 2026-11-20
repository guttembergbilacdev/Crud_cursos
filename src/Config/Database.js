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