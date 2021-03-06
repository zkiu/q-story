require('dotenv').config()
const PORT = process.env.PORT || 8080

const imageRoute = require('./routes/imageRoute')
const projectRoute = require('./routes/projectRoute')

const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.json())

app.use('/image', imageRoute)
app.use('/project', projectRoute)

app.use(function (req, res, next) {
	res.status(404).send('Invalid API access')
})

app.listen(PORT, () => {
	console.log(`Kiu's server connection is open at http://localhost:${PORT}`)
})
