import gameService from "../services/gamesServices.js";

//Listagem
const getAllGames = async (req, res) => {
    try {
        const games = await gameService.getAll()
        res.status(200).json({ games: games });
    } catch(error){
        console.log(error)
        res.status(500).json({ error: "Erro interno do servidor."});
    }
}

//Cadastro
const createGame = async (req, res) => {
    try{
        const {title, year, genre, platform, price} = req.body
        await gameService.Create(title, year, genre, platform, price)
        res.sendStatus(201)
    }catch(error){
        console.log(error);
        res.status(500).json({ error: "Erro interno do servidor."})
    }
}



export default {getAllGames, createGame};
