const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello Makafui'))

app.get('/add-todo', (req, res) => res.send('Todo Added'))

app.get('/delete-todo', (req, res) => res.send('Todo Deleted'))

app.get('/mark-todo', (req, res) => res.send('Todo Marked'))

app.get('/display-todo', (req, res) => res.send('Todo Displayed'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))