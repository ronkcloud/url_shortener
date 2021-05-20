const express = require('express')
const mongoose = require('mongoose')
const homeRouter = require('./routes/home')
const path = require('path')
const app = express()

mongoose.connect('mongodb://localhost/urlShortener', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
const db = mongoose.connection
db.on('error', (error) => console.log(error))
db.once('open', ()=> console.log('Connected to database'))

app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/assets'))
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use('/', homeRouter)

app.listen(process.env.PORT || 5000, ()=>console.log('Server started'));