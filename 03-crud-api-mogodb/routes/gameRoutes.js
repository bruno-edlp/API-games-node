import express from 'express';
const gamesRoutes = express.Router();
import gameController from "../controllers/gameController.js";


// endpoint listagem
gamesRoutes.get("/games", gameController.getAllGames)

//endpoint cadastro
gamesRoutes.post("/games", gameController.createGame)

export default gamesRoutes;
