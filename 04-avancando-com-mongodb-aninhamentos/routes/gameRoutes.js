import express from 'express';
const gamesRoutes = express.Router();
import gameController from "../controllers/gameController.js";


// endpoint listagem
gamesRoutes.get("/games", gameController.getAllGames)

//endpoint cadastro
gamesRoutes.post("/games", gameController.createGame)

//endpoint deletar
gamesRoutes.delete("/games/:id", gameController.deleteGame)

//endpoint update
gamesRoutes.put("/games/:id", gameController.updateGame)
 
//endpoint lista um jogo
gamesRoutes.get("/games/:id", gameController.getOneGame)

export default gamesRoutes;
