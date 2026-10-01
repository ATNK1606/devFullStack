const fs = require('fs/promises')



const readContent = async() => {
    const contents = await fs.readFile('data/jokes.json', 'utf8');
    return JSON.parse(contents)
}

const all = async(req, res) => {
    try {
        // const contents = await fs.readFile('data/jokes.json','utf8');
        
        // const jsonContents = JSON.parse(contents)
        const jokes = await readContent()
        // const jokes = jsonContents.map(element => element.joke);
        res.render('pages/all', {jokes})
    } catch (error) {
        console.error(error)
        res.status(500).json({message: 'Erreur lors de la réception des données !'})
    }
}

const findJoke = async (req, res) => {
    try {
        const {id} = req.params;
        const jsonContents = await readContent();
        const joke = jsonContents.find(element => element.id === id);
        res.render('pages/detailsJoke', {joke})
    } catch (error) {
        console.error(error)
        res.status(500).json({message:'Erreur serveur !'})
    }
}

module.exports = {all, findJoke}