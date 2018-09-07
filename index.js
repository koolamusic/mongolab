// import mongoose 
const mongoose = require('mongoose');

// create connection instance using inbuilt mongoose connect object
// this is a promise and would require a .then and catch error for debugging 

mongoose.connect('mongodb://localhost/mongo-exercises', {useNewUrlParser: true})
.then(() => console.log('connecting to database successful'))
.catch(err => console.error('could not connect to mongo DB', err))



// create mongoose schema from method mongoose.schema [this is a json object]
// mongo db schema have serveral datatypes, String, Boolean, Buffer(for binary data types),  
const foodSchema = mongoose.Schema({
  origin : String,
  country : String,
  tag: [String],
  date: {
    type: Date, 
    default: Date.now()
  },
  isReady: Boolean,

});



// create schema model 
// In mongoose Course Models will use the Pascal Naming Convention are are declared from the Mongoose object using a construction function
// here calling the model food means that this mongoose model will extend the mongoose schema type foodSchema, declared initially and can be used as a mongoose datastore model 
const Food = mongoose.model('Food', foodSchema)


// Food is a CLASS and you can create objects out of it using a constructor function
// model contructors create an interface to mongoDB collections as well as create document instances.
// const newFood = new Food({
//   origin: 'Food',
//   country: 'Nigeria',
//   tag: ['jollof', 'tomato'],
//   isReady: true

// })


// save the course in the database; this is an async operation since we will be accessing the file system,
// this operation will return a promise.  REMEMBER that when you use await you should have your code in an async function
async function createFood {
  const newFood = new Food({
  origin: 'Grains',
  country: 'Ghana',
  tag: ['jollof', 'Wackye'],
  isReady: true

})

// call the course.save operation within an await then console.log the result
const result = await course.save();
console.log(result);

}

// call the async create food function here
createFood();





// query collections
