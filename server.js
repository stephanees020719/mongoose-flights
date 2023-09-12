require("dotenv").config() //needs to be there to work
const express = require('express');
const Flight = require('./models/flight');
const mongoose = require("mongoose");
const app = express();
 
 
// By implementing the line below, we now have access to the req.body. Which is the parsed formData from the form request.
app.use(express.urlencoded({ extended: false }));
 
//database conection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  
  });
  
const jsxViewEngine = require('jsx-view-engine');	// Import the jsx-view-engine library
 
app.set('view engine', 'jsx');// Set the view engine to use JSX
app.set('views', './views');	// Set the views directory
app.engine('jsx', jsxViewEngine());// Set the engine to use jsxViewEngine

// Index view - display reserved list of all flights
app.get('/flights', async (req, res) => {
  try {
    const flights = await Flight.find();
    res.render('flights/index', { flights });
  } catch (error) {
    res.status(400).send(error);
  }
});
 
// New view - display a form to create a new flight
app.get('/flights/new', (req, res) => {
  res.render('flights/new');
});
 
// Create a new flight
app.post('/flights', async (req, res) => {
  try {
    const flight = await Flight.create(req.body)
    res.redirect('/flights');
  } catch (error) {
    res.status(400).send(error);
  }
});
	// Show
    app.get('/flights/:id', async (req, res) => {
        try {
          const flight = await Flight.findById(req.params.id);
          res.render('flights/show', { 
            flight: flight
        });
        } catch (error) {
          res.status(400).send(error);
        }
    })
 
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});



