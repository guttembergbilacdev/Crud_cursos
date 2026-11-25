
import db from "../config/Database.js";
import cursoRepositories from "../Repositories/curso.Repositories.js";


async function createcursoService(novocurso) {
    
   
  const cursoSalvo =
    await cursoRepositories.createcursoRepositories(novocurso);

  if (!cursoSalvo) {
    throw new Error("Erro ao criar novo curso");
  }

  return cursoSalvo;
}


async function readALLcursoService() {
    const curso = await cursoRepositories.readALLcursoRepositories();

    return curso;
}


export default {
  createcursoService,
  readALLcursoService,
};
