const db = require("./models");
/* ======================================================== */
/* CREATE */
// Input: 
// 1. An object with key values for the row - properties not defined will be left null (unless model is adjusted)
// Example:   db.user.create( { firstName: "Marcia", lastName: "Niciv", age: 25})
// Output: A user object with current values and previous values (duplicates at time of creation)

const newUser = {
    firstName: "Rome",
    lastName: "Bell",
    age: 33
}
function createUser(){
db.user.create(newUser)
.then(createdUser=>{
    console.log(createdUser)
    //createdUser is the return value of our create method -
    // what sequelize gives back from the SQL insert command
});
}
// createUser()

function getOne(){
    db.user.findOne({
        where: {id: "1"}
    })
    .then(foundUser=>{
        console.log(foundUser)
    })
}
// getOne();

function getAll(){
    db.user.findAll({
        where: {lastName: "Bell"}
    })
    .then(foundUser=>{
        console.log(foundUser)
    })
}
// getAll()

// function deleteUser(){
//     db.user.destroy({where: {id: 3}})
//         .then(numOfRowsDeleted=>{console.log(numOfRowsDeleted)
//         })
// });
// deleteUser()

db.user.destroy({
    where: { id: 3 }
  }).then(numRowsDeleted=>{
      console.log(numRowsDeleted)
    // do something when done deleting
  });