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

    async Delete(id) {
        try {
            await Game.findByIdAndDelete(id);
            console.log(`Game com a ID: ${id} foi deletado com sucesso.`)
        } catch(error) {
            console.log(error);
        }
    }


    async Update(id, title, year, genre, platform, price) {
        try{
            const game = await Game.findByIdAndUpdate(id, {
                title,
                year,
                genre,
                platform,
                price,
            }, 
            { new: true })
            console.log(`O jogo com id ${id} foi alterado com sucesso`)
            return game;
        } catch(error){
            console.log(error) 
        }
    }

    async getOne(id) {
        try{
            const game = await Game.findOne({_id: id})
            return game;
        } catch (error){
            console.log(error)
        }


    }

}

export default new gameService();
