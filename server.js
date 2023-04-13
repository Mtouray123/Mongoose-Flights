require('dotenv').config();
const express = require('express');
const app = express();
const PORT = 3000;
const connectToDB = require('./config/db');
const Flight = require('./models/Flight');


//============ Configuring Engine
app.set('view engine', 'jsx');
app.engine('jsx', require('jsx-view-engine').createEngine());

/**
 * Middlewares
 */
app.use((req, res, next) => {
    console.log('I fly all altitudes!');
    next();
})
// Parsing incoming data from request
app.use(express.urlencoded({extended: false}));

// Home Page
app.get('/', (req, res) => {
    res.send('<h1>Welcome Aboard Your Flight!</h1>');
});

/**
 * Index Route
 */
app.get('/flights', async (req, res) => {
    try {
      const flights = await Flight.find({});
      res.render('Index', { flights });
    } catch (error) {
      console.error(error);
      res.render('error');
    }
  });

/**
 * New Route
 */
app.get('/flights/new', (req, res) => {
    res.render('New');
});

/**
 * Post Method
 */
app.post('/flights', async (req, res) => {
    try {
      const flight = await Flight.create(req.body);
      console.log(flight);
      res.redirect('/flights');
    } catch (error) {
      console.error(error);
      res.render('error');
    }
  });

//* app listener
app.listen(PORT, () => {
    console.log('Server is Up!');
    connectToDB();
});