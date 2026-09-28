const dotenv = require('dotenv');
const express = require('express');
const cors = require('cors')
const path = require('path')
dotenv.config()
const PORT = process.env.PORT || 3000;


const app = express ();
app.set('view engine', 'ejs'); // Définition du moteur de rendu
app.use(express.static(path.join(__dirname, 'public'))); 
app.set('views', path.join(__dirname, 'views')); // Déclaration du dossier contenant les vues

const expressLayouts = require('express-ejs-layouts')

app.use(express.json())
// app.use(cors())
// app.use('/', (req, res) => {


//     const user = req.body;
//     res.status(200).json({ data: user, message:'La requête est très bien arrivée !'})
// })
// 1er middleware : ex. d'affichage d'informations dans la console
// app.use((req, res, next) => {
//     const now = new Date().toDateString() ;
//     console.log(`${now} : une requête ${req.method} est arrivée !`);
//     next(); // l'appel à next() transmet les informations pour traitement dans le middleware suivant
// });


// // // 2ème middleware : préparation de la réponse
// app.use((req, res, next) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/html;charset=utf-8');
//     next(); // l'appel à next() transmet les informations pour traitement dans le middleware suivant
// });

// // 3ème middelware : envoi de la réponse
// app.use((req, res) => {
//     res.end('Le serveur Express dit <b>bonjour</b>');
// });

// app.use('/', (req, res) => {
//     res.sendFile(path.join(__dirname,'index.html'))}

// )
app.use(expressLayouts)
app.set('layout', '../views/layouts/layout')
// app.use((req, res) => {
//     // demande de rendu EJS
//     res.render('pages/home', {nickname: 'Amadou', sex:'M'}) ; // on donne le chemin dans views, et on omet le .ejs
// });

// app.get('/about', (req, res) => {
//     // demande de rendu EJS
//     res.render('pages/about') ; // on donne le chemin dans views, et on omet le .ejs
// });

// app.get('/home', (req, res) => {
//     // demande de rendu EJS
//     res.render('pages/accueil') ; // on donne le chemin dans views, et on omet le .ejs
// });

const allRouter = require('./routes/allRouter');
app.use('/jokes', allRouter);

const randomRouter = require('./routes/randomRouter')
app.use('/jokes', randomRouter);


app.get('/{*splat}', (req, res) => {
    res.redirect('/jokes/list')
})
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});