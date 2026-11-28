
import cursoController from "../Controller/curso.Controller.js";

import { Router } from "express";

const cursoRouter = Router();

cursoRouter.post("/curso", cursoController.createcursoController);

cursoRouter.get('/curso', cursoController.readALLcursoController);

cursoRouter.delete("/curso/:id", cursoController.deletecursoController);

export default cursoRouter;