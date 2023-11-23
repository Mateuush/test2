const express = require('express')
const app = express()
const { createConnection } = require('mysql')
const cors = require('cors')

app.use(cors({
    origin: "*"
}))

const conn = createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'new_db'
})

app.get('/Uczniowie', (req, res) => {
    res.json([])
})

app.get('/Szkoly', (req, res) => {
    res.json([])
})

app.get('/Klasy', (req, res) => {
    res.json([
        {
            id: 1,
            name: '4D'
        }
    ])
})

app.listen(7777)