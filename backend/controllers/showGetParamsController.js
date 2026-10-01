const getParams = (req, res) => {
    res.render('pages/show_get_params', {date : req.query})
}

module.exports = getParams