const Engine = require("./src/models/Engine")
const express = require('express')
const path = require('path')
const app = express()
const PORT = 4000

const cors = require('cors')

app.use(express.static(path.join(__dirname, 'public')))

const server = app.listen(PORT, () =>{
    console.log(`server running on ${PORT}`)
})

app.use(cors())
app.use(express.json())


app.get('/', async(request, response) => {
    response.send(`<h2>Hi Mom, look its express!</h2>`)
})

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
app.put('/engine/:id', async(request, response) => {
    Engine.update(request.body,{
        where: {id: request.params.id}
    })
    response.json(await Engine.findAll())
})
app.delete('/engine/:id', async(request, response) => {
    Engine.destroy({
        where: {id: request.params.id}
    })
    response.json(await Engine.findAll())
})