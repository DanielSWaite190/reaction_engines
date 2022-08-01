const Engine = require("./src/models/Engine")
const express = require('express')
const path = require('path')
const app = express()
const PORT = 4000


app.use(express.static(path.join(__dirname, 'public')))

const server = app.listen(PORT, () =>{
    console.log(`server running on ${PORT}`)
})

app.get('/', (request, response) => {
    response.send("<h1>Hi Mom, look its Express!<h1>")
})

app.get('/engine', async(request, response) => {
    // response.json(await seed)
    response.json(await Engine.findAll())
})