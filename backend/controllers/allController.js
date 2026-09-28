const fs = require('fs/promises')

const all = async(req, res) => {
    try {
        const contents = await fs.readFile('data/jokes.json','utf8');
        
        const jsonContents = JSON.parse(contents)
        const jokes = jsonContents.map(element => element.joke);
        res.render('pages/all', {jokes})
    } catch (error) {
        console.error(error)
        res.status(500).json({message: 'Erreur lors de la réception des données !'})
    }
}

module.exports = {all}