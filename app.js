const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const path = require('path')

app.use(express.static(path.join(__dirname, 'public')))

app.get('/api/saludo',(request, response)=>{
    response.json({mensaje: 'Hola desde mi app DLC'})
})

app.listen(PORT, ()=>{
    console.log(`servidor corriendo en el puerto http://localhost:${PORT}`)
})

