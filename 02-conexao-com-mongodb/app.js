import express from "express";
import mongoose from "mongoose";
const app = express();

import Game from "./models/Games.js";

//config do express 
app.use(express.urlencoded({extended: false}))
app.use(express.json())

//Iniciando conexão com MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/api-thegames");

app.get("/", async (req,res)=>{
        try{
            const games = await Game.find()
            res.status(200).json({games: games}) //Cod 200 : OK

        } catch (error) {
            console.log(error)
            res.status(500).json({error : 'Erro interno do servidor'})
        }
});



//rodando api
const port = 4000;
app.listen(port,(error) =>{
    if(error){
        console.log(error);
    }
    console.log(`API rodando em https://localhost:${port}.`);
});