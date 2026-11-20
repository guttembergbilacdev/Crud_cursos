import CursoControllers from "../Controllers/Curso.controllers.js";
import { Router } from "express";

const CursoRouter = Router ();

CursoRouter.post("Curso", CursoControllers.creatCursocontrollers);

export default CursoRouter;