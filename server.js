require('dotenv').config()//needs to be there to work
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const Flights = require('./models/Flight')
const methodOverride = require('method-override')


//database conection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  mongoose.connection.once("open", () => {
    console.log('conected to mongoose')
  })


app.set("view engine", 'jsx')// Set the view engine to use JSX
const jsxViewEngine = require('jsx-view-engine')// Set the views directory
const Flight = require('./models/Flight')
app.engine("jsx", jsxViewEngine())// Set the engine to use jsxViewEngine


// By implementing the line below, we now have access to the req.body. Which is the parsed formData from the form request.
app.use(express.urlencoded({extended: false}))
//add methor override 
app.use(methodOverride('_method'));

// Index view - display reserved list of all flights
app.get('/flights', async (req, res) => {
  try {
    const foundFlights = await Flights.find({})
    res.render('Index', {flights: foundFlights})
  } catch (error) {
    res.status(400).send(error)
  }
})
// New view - display a form to create a new flight
app.get('/flights/new', (req, res) => {
    res.render("New")
})



//Update Route
app.put('/flights/:id', async (req, res) => {
  try {
    const destination = req.body
    const foundFlight = await Flight.findById(req.params.id)
    console.log(foundFlight)
    if (foundFlight.destinations.length > 0) {
      foundFlight.destinations.pop()
    }
    foundFlight.destinations.push(destination)
    console.log(foundFlight)
    const updatedFlight = await Flight.findByIdAndUpdate(req.params.id, foundFlight, {new: true})
    res.status(201).send('<h1>Your flight was updated</h1>')
  } catch (error) {
    res.status(400).send(error)
  }
})

// Create a new flight
app.post('/flights', async (req, res) => {
  try {
    const createdFlight = await Flight.create(req.body);
    res.redirect('/flights');
  } catch (error) {
    res.status(400).send(error);
  }
})



//Show Route
app.get('/flights/:id', async (req, res) => {
  try {
    const foundFlight = await Flight.findById(req.params.id)
    res.status(200).render('Show', {flight: foundFlight})
  } catch (error) {
    res.status(400).send(error)
  }
  
})

//catch the routes
app.get("*", (req, res) => {
  res.redirect("/flights");
});

//listen on port 3000
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});



