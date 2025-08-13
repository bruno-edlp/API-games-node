import express from "express";
const app = express();
//config do express 
app.use(express.urlencoded({extended: false}))
app.use(express.json())


app.get("/", (req,res)=>{
    
    const games = [
        {
        title: "delta",
        year: 2024,
        plataforma: "PC",
        price: 0,
        },
        {
        title: "delta",
        year: 2024,
        plataforma: "PC",
        price: 0,
        },
    ];

res.json(games);         
    
})



//rodando api
const port = 4000;
app.listen(port,(error) =>{
    if(error){
        console.log(error);
    }
    console.log(`API rodando em https://localhost:${port}.`);
});