const express = require('express');

const app = express()

app.get('/', (req, res) => {
    res.send('<h1>My To do list :)</h1>')
})

app.listen(3000, () => {
    console.log('Server has been started')
})
