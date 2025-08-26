import Game from "../models/Games.js"

//services conterá os metodos de manipulação do banco

class gameService{
    //Busca registros no db
    async getAll() {
        try {
            const games = await Game.find()
            return games
        }catch (error){
            console.log(error);
        }
    }

    async Create(title, year, genre, platform, price) {
        try {
            const newGame = new Game({
                title,
                year,
                genre,
                platform,
                price,
            });
            await newGame.save()
        } catch(error){
            console.log(error);
        }

    }

}

export default new gameService();
