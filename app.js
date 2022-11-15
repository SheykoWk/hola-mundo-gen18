const express = require('express')
// import express from 'express' 

//const author = require('./package.json')
// import file from './package.json'

//? localhost:9000/

//! protocolo TCP/IP

const port = 9000

const app = express()





app.listen(port, () => {
    console.log(`Server started at port ${port}`)
})
