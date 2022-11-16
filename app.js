const express = require('express')
// import express from 'express' 

//const author = require('./package.json')
// import file from './package.json'

//? localhost:9000/hola

//! protocolo TCP/IP

const port = 9000

const app = express()

app.get('/hola', (peticion, respuesta) => {
    respuesta.json({
        verb: peticion.method,
        message: 'Hola mundo',
        hola: 5,
        active: false,
        skills: ['JS', 'Go', 'Bash']
    })
})

app.delete('/hola', (peticion, respuesta) => {
    console.log(peticion)
    respuesta.json({
        verb: peticion.method,
        params: peticion.params,
        body: peticion.body,
        ip: peticion.ip
    })
})

//? peticion -> request -> req
//? respuesta -> response -> res

app.get('/text/:mensaje', (req, res) => {
    const mensaje= req.params.mensaje
    res.json({
        message: `Este es el mensaje por parametro: ${mensaje}`
    })
})



//? este listen, va a estar hasta abajo de nuestro app.js
app.listen(port, () => {
    console.log(`Server started at port ${port}`)
})
