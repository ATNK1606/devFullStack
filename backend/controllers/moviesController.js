const Movie = require('../models/Movie');


const list = async(req, res) => {
    try {
        const movies = await Movie.find().sort({title:'asc'})
        res.render('pages/moviesList', {movies})
    } catch (error) {
        console.error(error);
        res.status(400).send(error);
    }
}

module.exports = list;