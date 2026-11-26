
import cursoService from "../Service/curso.Service.js";

async function createcursoController(request, response) {
  const novocurso = request.body;
  try {
    const cursoSalvo = await cursoService.createcursoService(novocurso);
    response.status(201).send(cursoSalvo); 
  } catch (error) {
    response.status(400).send(error.message); 
  }
}

async function readALLcursoController(request, response) {
  try {
    const cursos = await cursoService.readALLcursoService();
    response.status(200).send(cursos); 
    
  } catch (error) {
    response.status(500).send(error.message); 
  }
}

export default {
  createcursoController,
  readALLcursoController,
};