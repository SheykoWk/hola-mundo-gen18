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
        message: 'Hola mundo'
    })
})

app.delete('/hola', (peticion, respuesta) => {
    respuesta.json({
        message: 'Hola pero desde delete'
    })
})



//? este listen, va a estar hasta abajo de nuestro app.js
app.listen(port, () => {
    console.log(`Server started at port ${port}`)
})
