import express from "express";
import CursoRouter from "./src/Routes/Curso.routes.js";

const app = express ();

app.use (express.json ());
app.use (CursoRouter);

app.listen (3000, () => {
    console.log ("Servidor rodando na porta 3000...");
})