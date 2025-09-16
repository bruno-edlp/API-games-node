import gameService from "../services/gamesServices.js";
import { ObjectId } from "mongodb";


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

//Deleção
const deleteGame = async (req, res) => {
    try {
        if(ObjectId.isValid(req.params.id)){
            const id = req.params.id
            gameService.Delete(id)
            res.sendStatus(204)
        } else {
            res.status(400).json({ error: "A ID enviada é ivalida."})
        }
        
    } catch(error) {
        console.log(error);
        res.status(500).json({ error: 'Erro interno do servidor.' });
    }
}

const updateGame = async (req, res) => {
    try{
        if(ObjectId.isValid(req.params.id)){
            const id = req.params.id
            const {title, year, genre, platform, price} = req.body
            const game = await gameService.Update(title, year, genre, platform, price)
            res.status(200).json({ game })
        }else{
            res.status(400).json({error: "A id enviada e invalida"})
        }
       
    }catch(error){
        console.log(error);
        res.status(500).json({ error: "Erro interno do servidor."})
    }
}

const getOneGame = async (req, res) => {
    try {
        if (ObjectId.isValid(req.params.id)) {
            const id = req.params.id
            const game = await gameService.getOne(id);
            if (!game) {
                res.send(404).json({ error: "O jogo não foi encontrado."})
            } else {
                res.status(200).json({ game })
            }
        } else {
            res.status(400).json({ error: "A ID enviada é invalida" })
        }
    } catch(error){
        console.log(error)
        res.sendStatus(500)
    }
}

export default {getAllGames, createGame, deleteGame, updateGame, getOneGame};

