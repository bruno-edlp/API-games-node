import jwt from "jsonwebtoken"
import userController from "../controllers/userController.js"

//funcao de autentificacao para verificar se usuario esta enviando o teken e se ele e valido

const Authorization = (res,req,next)=>{
    const authToken = req.headers['authorization']
    if(authToken != undefined){
        next()

    }else{
        res.status(401).json({error: "token invalido"});
    }
}