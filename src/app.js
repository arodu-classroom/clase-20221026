import express from "express"

const app = express()

app.get('/', function (req, res) {
    res.send("<h1>Hola Mundo!!!</h1>")
})

app.listen(process.env.PORT || 3000);   
