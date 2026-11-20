import Cursoservice from "../Services/Curso.services.js"

async function creatCursocontrollers(req, res) {
    const novoCurso = req.body

    try {
        const Cursosalvo = await Cursoservice.creatCursoservice(novoCurso)

            res.status (201).send(Cursosalvo)
    } catch (err) {
        res.status (400).send(err.message)
    }
}

export default {
    creatCursocontrollers
}