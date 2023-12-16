import 'dotenv/config'
import express from 'express'
import bodyParser from 'body-parser'
import routes from './routes/index.js'
const app = express()
const port = process.env.PORT;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(routes);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})