const express = require('express')
const path = require('path')
const app = express()
const PORT = 3000

app.use(express.static(path.join(__dirname, 'public')))

const server = app.listen(PORT, () =>{
    console.log(`server running on ${PORT}`)
})

app.get('/', (request, response) => {
    response.send("<h1>Hi Mom<h1>")
})