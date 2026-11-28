
import cursoRepository from "../Repository/curso.Repository.js";

async function createcursoService(novocurso) {
  const cursoSalvo = await cursoRepository.createcursoRepository(novocurso);

  if (!cursoSalvo) {
    throw new Error("Erro ao criar novo curso");
  }

  return cursoSalvo;
}

async function readALLcursoService() {
  const cursos = await cursoRepository.readALLcursoRepository();
  return cursos;
}

async function deletecursoServices(id) {
    
    const mensagemRetorno = await cursoRepository.deletecursoRepository(id);

    if (!mensagemRetorno) {
        throw new Error("Erro ao deletar curso!");
    }

    return mensagemRetorno; 
}

export default {
  createcursoService,
  readALLcursoService,
  deletecursoServices
};