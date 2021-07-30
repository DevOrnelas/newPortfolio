const express = require('express')
const ejs = require('ejs')
const port = 5000 || process.env.PORT
const app = express()

app.set('view engine', 'ejs')
app.use('/assets', express.static('assets'))

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/', (req, res)=>{
    res.render('Home')
})



const server = app.listen(port, ()=>{
    console.log(`Listening on port:  ${port}`)
})