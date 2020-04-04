const express = require('express')
const app = express()
const port = process.env.PORT || 9000

app.get('/', (req, res) => res.send('Hello'))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))