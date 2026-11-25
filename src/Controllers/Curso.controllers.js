
import cursoService from "../Service/curso.Service.js";


async function createcursoController(request, response) {
        const novocurso = request.body;

    try {
        
        const cursoSalvo = await cursoService.createcursoService(novocurso);

               response.status(201). send(cursoSalvo);
    } catch(error) {

               response.status(400). send(error.message);
    }
}

async function readALLcursoController(request, response) {
    try {
        const curso = await cursoService.readALLcursoService();
        
        response.status(200).send({curso});
    } catch(error) {
        response.status(400).send(error.message);
    }
}

export default {
    createcursoController,
    readALLcursoController
}