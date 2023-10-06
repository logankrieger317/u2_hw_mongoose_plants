const express = require('express');
const db = require('./db');
const plantControllers = require('./controllers/plantController');
const bodyParser = require('body-parser');
//logger subed for Morgan 
const logger = require('morgan');
const plant = require('./models/plant');

// require() imports and middleware here ^ ///////

const PORT = process.env.PORT || 3001;

const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());


app.get('/', (req, res) => res.send('This is root ti toot toot!'))
app.get('/plants', plantControllers.getAllPlants)
app.get('/plants/:id', plantControllers.getPlantById)
app.get('/plants/:id', plantControllers.getOnePlant)

app.put('/plants/:id', plantControllers.updatePlant)
app.post('/plants', plantControllers.createPlant )
app.delete('/plants/:id', plantControllers.deletePlant)

// app.use() middleware here ^ ///////////////////

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))