const express = require('express'),
app = express(),
bodyParser = require('body-parser'),
mongoose = require('mongoose')
routes = require('./routes/routes')

if (process.env.DEV === 'true')
	var config = require('./config/dev')
else
	var config = require('./config/prod')

mongoose.connect(config.db_uri).then(function() {
	console.log(config.startMessage)
}).catch(function(err) {
	console.log(err)
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/api', routes)

const PORT = process.env.PORT || 1337
app.listen(PORT, () => {
console.log(`App listening on port ${PORT}`)
console.log('Press Ctrl+C to quit.')
})