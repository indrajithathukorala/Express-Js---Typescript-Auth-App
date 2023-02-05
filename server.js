const dotenv = require('dotenv')
const jwt = require('jsonwebtoken')
const bodyParser = require('body-parser')
const express = require('express')
const app = express()


const auth = require('./middlware/auth')
const tokenGenrate = require('./helper/token')

dotenv.config()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

console.log(process.env.TOKEN_SECRET)

PORT = 3000




app.get('/', auth, (req,res)=> {
    res.send({
        "name":"dsadas",
        "id":3534
    })
    console.log('done')
})

app.get('/user', auth, (req,res) =>{
    res.send({
        "name":"new",
        "id":3534,
        "cv":"wwwwwwwwww"
    })
})

app.post('/api/user', (req,res) =>{
    const token = tokenGenrate({username : req.body.name})
    res.send(token)
    console.log(req.body.name)
})



app.listen(PORT, () => {
    console.log(`server run ${PORT}`)
})
