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
  name: String,
  tags: [String],
  author: String,
  date: { type: Date, default: Date.now },
  price: Number,
  isPublished: Boolean
})



// Course Mongoose Model for Courses
// Create Class which can extend the Schema
const Courses = mongoose.model('Courses', courseSchema)


/*
IT IS GENERALLY ADVISABLE TO RETURN DATA IN FUNCTIONS AND CALL THEM OR CONSOLE.LOG THROUGH OTHER 
PROCESSES OR FUNCTIONS, USE ASYNC FUNCTIONS TO MANIPULATE RETURN FROM OTHER ASYNC FUNCTIONS
*/


// async function updateCourse(id) {
//   // Approach: Query First 
//   // findById()
//   // Modify its properties
//   // save()



//   // Approach : Update First
//   // Update directly 
//   // Optionally: get the updated document 

//   const course = await Courses.findById(id);
//     if (!course) return;


//     course.isPublished = true;
//     course.author = 'Yuri Gagarin';


//   // if (!course) {
//   //   return 
//   // }
//   // else {
//   //   course.isPublished = true;
//   //   course.author = 'Andrew Miracle';
//   // }
//   const result = await course.save();
//   console.log(result);


//   // you can also use the course.set() method to directly update the course database
//   // using Approach 2 as stated above 
//   // let result = course.set({
//   //   isPublished: true,
//   //   author: 'Yuri Gagarin'

//   // })
  

// }


// // call the function within updateCourse
// updateCourse('5a68fdd7bee8ea64649c2777');




// async function updateCourse(idNum) {
//   const course = await Courses.findById(idNum);
//   if (!course) return;
  
//     let result = course.set({
//     isPublished: true,
//     author: 'Yuri Gagarin'
//   })

//   console.log(result.author)

// }


// updateCourse("5a68ff090c553064a218a547");


// Test Async Function on Mongoose Find() method
// async function testCollection(id) {
//   const testDb = await Courses.find({name: id})
//   console.log(testDb);
// }

// testCollection(/.*by.*/i);




// Try creating a forLoop to Traige a collection by their ID and create an async function to change their author names
// async function testCollection(id) {
//   const testDb = await Courses.find({ name: id })
//   console.log(testDb);

//   for (let i = 0; i < testDb.length; i++) {
//     testDb[i].author = "Andrew Jacob";
//     testDb.save()    
//   }

// }

// testCollection(/.*by.*/i);




// Using the Update Method and MongoDB Update Operators [set operator]

async function setCourse(id){
	const result = await Courses.updateOne({_id: id}, {
	  $set: {
	    author: 'Mosh Andy',
	    isPublished: false
	   }
	})
	console.log(result);

  }



setCourse("5a68ff090c553064a218a547");




