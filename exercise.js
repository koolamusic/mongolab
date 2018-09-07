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
   name : String,
   tags : [String],
   author : String,
   date : {type: Date, default: Date.now},
   price : Number,
  isPublished : Boolean
 })



 // Course Mongoose Model for Courses
 // Create Class which can extend the Schema
const Courses = mongoose.model('Courses', courseSchema)



// write async function to retrieve document  properties from the courses collection
// retrieve all backend courses using the $in comparison operator
// use the .sort method to sort them by their name
// async function retrieveCourseBackend(){
//   const courses = await Courses
//   .find({tags: { $in: 'backend'} })
//   .and( {isPublished: true} )
//   .sort( { name: 1} )
//   // use select to determine which collection properties to output
//   .select({ name: 1, author: 1, isPublished: 1 })
//   console.log(courses);
// }

// console.time(retrieveCourseBackend());



/*
IT IS GENERALLY ADVISABLE TO RETURN DATA IN FUNCTIONS AND CALL THEM OR CONSOLE.LOG THROUGH OTHER 
PROCESSES OR FUNCTIONS, USE ASYNC FUNCTIONS TO MANIPULATE RETURN FROM OTHER ASYNC FUNCTIONS
*/

async function retrieveCourseBackend() {
  return await Courses
    .find({ tags: { $in: 'backend' } })
    .and({ isPublished: true })
    .sort({ name: 1 })
    // use select to determine which collection properties to output
    .select({ name: 1, author: 1, isPublished: 1 })
}


retrieveCourseBackend();
