
import cursoController from "../Controllers/curso.Controllers.js";

import { Router } from "express";

const cursoRouter = Router();

cursoRouter.post("/curso", cursoController.createcursoController);

cursoRouter.get("/curso", cursoController.readALLcursoController);

export default cursoRouter;