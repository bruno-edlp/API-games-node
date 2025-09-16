// Importando o service
import userService from "../services/userService.js";
//importando jwt
import jwt from 'jsonwebtoken'
//e recomendavel que o segredo esteja em uma variavel de ambiente
const jwtSecret = 'apithegames'

// Função para CADASTRAR um Usuário
const createUser = async (req, res) => {
  try {
    // Coletando os dados do corpo da requisição
    const { name, email, password } = req.body;
    await userService.Create(name, email, password);
    res.status(201).json({ success: "Usuário cadastrado com sucesso!" }); // Cod. 201: CREATED
  } catch (error) {
    console.log(error);
    res.sendStatus(500); // Erro interno do servidor
  }
};

// FUNÇÃO para realizar o LOGIN
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userService.getOne(email);
    if (user != undefined) {
      ///fazendo a validacao senha
      if(user.password == password){
        //gerando o token com jwt
        jwt.sign({id: user.id, email: user.email},jwtSecret, {expiresIn:'48h'}, 
          (error,token)=>{
            if(error){
              res.status(400).json({error:'nao foi possivel gerar o token'})
            }else{
              //token gerado com sucesso
              res.status(200).json({token})
            }
          }
        )
        //senha incorreta
      }else{
        res.status(401).json({error:'credenciais invalidas'})
      }
      
    } else {
      res.status(404).json({ error: "Usuário não encontrado!" });
    }
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

export default { createUser, loginUser, jwtSecret };
