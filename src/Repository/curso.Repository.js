
import db from "../Config/Database.js";

db.run(`
  CREATE TABLE IF NOT EXISTS curso (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT NOT NULL UNIQUE,
    area TEXT NOT NULL,
    nivel TEXT NOT NULL,
    modalidade TEXT NOT NULL
  )
`);

function createcursoRepository(novocurso) {
  return new Promise((resolve, reject) => {
   
    const { nome, area, nivel, modalidade } = novocurso;

    db.run(
      `INSERT INTO curso (nome, area, nivel, modalidade) VALUES (?,?,?,?)`,
      [nome, area, nivel, modalidade],
      (err) => {
        if (err) {
          reject(err); 

        } else {
          resolve(novocurso); 
        }
      }
    );
  });
}

function readALLcursoRepository() {
  return new Promise((resolve, reject) => {
    db.all(`SELECT * FROM curso`, [], (err, rows) => {
      if (err) {
        reject(err);
      } else {
        resolve(rows); 
      }
    });
  });
}

function deletecursoRepository(id) {
    
    return new Promise((resolve, reject) => {
        db.run(
            "DELETE FROM curso WHERE id = ?", 
            [id],
            (error) => {
                if (error) {
                    reject(error);
                } else {
                   
                    resolve({
                        message: "curso excluido com sucesso!"
                    });
                }
            }
        );
    });
}
export default {
  createcursoRepository,
  readALLcursoRepository,
  deletecursoRepository
};