const getData = (req, res, next) => {
    let data = req.body
    //Ne pas donner en paramètre body afin de ne pas avoir de conflit avec
    res.render('pages/show_post_data', {data});
}

module.exports = getData;

