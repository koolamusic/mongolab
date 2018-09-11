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
async function createFood() {
  const newFood = new Food({
  origin: 'Grains',
  country: 'Nigeria',
  tag: ['Green', 'Corn'],
  isReady: true

})

// call the course.save operation within an await then console.log the result
const result = await newFood.save();
console.log(result);

}

// call the async create food function here


/*
 createFood();
*/




// query and retrieve collections from database
// use the Defined Mongoose.Model Created e.g *(Food) to query db based on methods within an async function
// you can pass an object from Mongoose model .find object can take properties and this can take one or more arguments 
// mongoose.Model.find ({key: value you are searching for or filtering for})
// .limit (you can customize this query to have a limit of results for return)
// .sort ({}) you can use this to modify the order (ascending or descending order (true,false, 1, -1))
// .select({}) you can choose which fields to include or exclude from collection data outputs. 


// async function getFood() {
//   const food = await Food
//   .find({country: 'Ghana'})
//   .sort({country: 1})


//   console.log(food);

// }

// getFood();


// Comparison Operators in Mongo

// gt (greater than)
// ne (not equal)
// eq(equal to)
// gte (greater than or equal to )
// lt (less than)
// lte (less than or equal)
// in
// nin (not in)
// Example will be to use The mongoose.Model.find({price: { $gte: 10, $lte: 5 e2} })


// async function getFood() {
//   const food = await Food
//     .find({ country: { $in: ['Ghana', 'Nigeria'] } })
//     .sort({ country: 1 })
//     .limit(2)

//   console.log(food);

// }

// getFood();


// Using Logical Operators to retrieve data from MongoDB
// async function getFood() {
//   // Mongo db uses the `and and or` Logical Operators
//   // the construct below is an example of how it can be implemented
//   // we pass in an array of filter objects
//   const food = await Food
//     .find()
//     .and([ {country: 'Nigeria'}, {isReady: true} ])
//     .sort({ country: 1 })


//   console.log(food);

// }

// getFood();



// Using Regular Expressions
// async function getFood() {
//   const food = await Food
//     .find({ country: /^ghana/i })
//     .sort({ country: 1 })


//   console.log(food);

// }

// getFood();



// counting the results of a Mongoose Query 
// use the .countDocuments or EstimatedDocumentCount method in the example below
async function getFood() {
  const food = await Food
    .find({ country: /^nigeria/i })
    .sort({ country: 1 })
    .countDocuments()


  console.log(food);

}

// getFood();


// create schema to update food collection using update method
async function setFood(id) {
  const result = await Food.updateOne({_id: id}, {
    $set: {
      isReady: true,
      country: 'Turkey'
    }
  });
  console.log(result);
}

// setFood('5b924603c2a01b4a4e0bfb63')




async function updateFood(id) {
  const food = await Food.findById(id);
  if (!food) return;

  food.isReady = false;
  food.country = 'Uganda';

  const result = await food.save();
  console.log(result);

}

// updateFood('5b924603c2a01b4a4e0bfb63');


// 

// using the findByIdAndUpdate Method, we pass in the Id parameter and retain the update values,
// but in order to log the result of new update functions we have to add the {new: true} parameter as an option to the findByIdAndUpdate method
async function setFood(id) {
  const result = await Food.findByIdAndUpdate( id, {
    $set: {
      isReady: true,
      country: 'Tunisia'
    }
  }, {new: true});
  console.log(result);
}

// setFood('5b924603c2a01b4a4e0bfb63')



// Find and Remove collection data 
// use the deleteOne method to delete a collection in a database without outputing the result [This method takes a Filter or Query Object] and when there are more than one Queries that match a Filter it takes the first result and deletes IT]
// use the find  to output the data of the collection to be deleted before deleting
async function removeFood(id) {
  const result = await Food.deleteOne({_id: id}) // won't return the collection that was deleted
  const food = await Food.findOneAndRemove({_id: id});
  console.log(food);
}

removeFood('5b925d28faa57c5c76872174');
