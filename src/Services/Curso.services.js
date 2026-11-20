import CursoRepositories from "../Repositories/Curso.repositories.js";

async function createCursoservice (novoCurso){
    const Cursosalvo = await CursoRepositories.creatCursorepositories

    if (!Cursosalvo) {
        throw new Error("Erro ao Criar novo Curso: ");
        
    }

    return CursoRepositories
}

export default {
    createCursoservice
}