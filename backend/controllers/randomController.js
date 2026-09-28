const fs = require('fs/promises')

const random = async(req, res) => {
    try {
        const contents = await fs.readFile('data/jokes.json','utf8');
        // console.log(contents)
        const jsonContents = JSON.parse(contents)
        const jokes = jsonContents.map(element => element.joke);
        const index = Math.floor(Math.random() * jokes.length)
        const joke = jokes[index];
        // console.log("La valeur est: ",joke)
        res.render('pages/random', {joke})
    } catch (error) {
        res.status(500).json({message: 'Erreur lors de la réception des données !'})
    }
}

module.exports = {random}