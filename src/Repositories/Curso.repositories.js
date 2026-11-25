
import db from "../Config/Database.js"

db.run (`
    CREATE TABLE IF NOT EXISTS curso (
        id  INTEGER PRIMARY KEY AUTOINCREMENT,
        nome TEXT NOT NULL UNIQUE, 
        area TEXT NOT NULL,
        nivel TEXT NOT NULL,
        modalidade TEXT NOT NULL
    )
`);

function createcursoRepositories(novocurso) {
    return new Promise ((resolve, reject) => {

        const { nome, area, nivel, modalidade } = novocurso;

        db.run (
            `INSERT INTOR curso (nome, area, nivel, modalidade) VALUES (?,?,?,?)`,
            [nome, area, nivel, modalidade],
            
            (err) => {
                if (err){

                    rej (err)
                } else {
                    
                    res (novocurso)
                }
            }
        )
    })
}

function readALLcursoRepositories() {
    return new Promise((resolve, reject) => {
        db.all(
            'SELECT * FROM curso', [],
            (error, rows) => {
                if (error) {
                    reject(error);
                } else{
                    resolve(rows);
                }
            }
        )
    })
}

export default {
     createcursoRepositories,
    readALLcursoRepositories

};
