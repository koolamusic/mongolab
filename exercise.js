// Get all the published backend course
// sort them by their name 
// pick only their name and author, 
// and display them


// import mongoose 
const mongoose = require('mongoose');


// add newURl parser to mongoose options 
const options = {
  useNewUrlParser: true
}

// mongoose connect 
mongoose.connect('mongodb://localhost/mongo-exercises', options)
 .then(() => console.log('connection to mongo-exercise database succesfull'))
 .catch(error => console.error('could not connect to mongo DB', error))



 // create or import Courses Schema 
 const courseSchema = mongoose.Schema({
   tags : [String],
   name : String,
   author : String,
   price : Number,
  isPublished : true
 })



 // Course Mongoose Model for Courses
 // Create Class which can extend the Schema
const Courses = mongoose.model('Courses', courseSchema)



