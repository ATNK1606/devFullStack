const dotenv = require('dotenv')
dotenv.config()
const mongoose = require('mongoose')

const mongoDB = `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}?retryWrites=true&w=majority`;

mongoose.set('strictQuery', true)

mongoose.connect(mongoDB).then(()=> console.log('MongoDB OK !')).catch(()=> console.error('MongoDB ERREUR !'));


const db = mongoose.connection

db.on('error', console.error.bind(console, 'MongoDB connection error: '))