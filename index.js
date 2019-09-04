const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello Makafui'))

app.get('/add-todo', (req, res) => res.send('Todo Added'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))