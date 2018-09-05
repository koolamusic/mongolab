// import mongoose 
const mongoose = require('mongoose');

// create connection instance using inbuilt mongoose connect object
// this is a promise and would require a .then and catch error for debugging 

mongoose.connect('mongodb://localhost/mongo-exercises', {useNewUrlParser: true})
.then(() => console.log('connecting to database successful'))
.catch(err => console.error('could not connect to mongo DB', err))



// create mongoose schema from method mongoose.schema [this is a json object]
const foodSchema = mongoose.Schema({
  origin : String,
  country : String,
  tag: [String],
  date: Date.now,
  isReady: Boolean,

});





// create schema model 




// query collections