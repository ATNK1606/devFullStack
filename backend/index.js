const dotenv = require('dotenv');
const express = require('express');
const cors = require('cors')
dotenv.config()
const PORT = process.env.PORT || 3000;


const app = express ();


app.use(express.json())
app.use(cors())

app.use('/', (req, res) => {
    const user = req.body;
    res.status(200).json({ data: user, message:'La requête est très bien arrivée !'})
})
// app.get('/', (req, res) => {
//     res.send('Server is runnning !')
// })


app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});