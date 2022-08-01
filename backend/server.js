const Engine = require("./src/models/Engine")
const express = require('express')
const path = require('path')
const app = express()
const PORT = 4000


app.use(express.static(path.join(__dirname, 'public')))

const server = app.listen(PORT, () =>{
    console.log(`server running on ${PORT}`)
})

app.use(express.json())


app.get('/engine', async(request, response) => {
    response.json(await Engine.findAll())
})
app.get('/engine/:id', async(request, response) => {
    response.json(await Engine.findByPk(request.params.id))
})
app.post('/engine', async(request, response) => {
    Engine.create(request.body)
    response.json(await Engine.findAll())
})