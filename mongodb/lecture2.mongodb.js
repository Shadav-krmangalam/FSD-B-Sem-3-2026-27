use("FSD")


//to retrieve the data whose attendance is greater than 90
// db.students.find({

//     "attendance":{
//         $gt:90
//     }
// })

//to retrieve the data whose attendance is greater than or equal 90
// db.students.find({
//     "attendance":{
//         $gte:90
//     }
// })


//to retrieve the data whose attendance is less than or equal 75

// db.students.find({
//     "attendance":{
//         $lte:75
//     }
// })


//to retrieve the data whose attendance is greater than 75 and less than or equal 90.


// db.students.find({
//     "attendance":{
//         $gt:75,
//         $lte:90
//     }
// })


//to retrieve the data whose value is equal to 18.
// db.students.find({
//     "age":{
//         $eq:18
//     }
// })


//To retrieve the data whose age is not equal to 18
// db.students.find({
//     "age":{
//         "$ne":18
//     }
// })


//Logical Operators

//To retrieve all the data whose course is CSE and gender is female
// db.students.find({"course":"CSE","gender":"Female"})




// db.students.find({

//     $or:[
//         {"course":"CSE"},
//         {"gender":"Female"}
//     ]
// })


//Projection

// db.students.find({},{
//     _id:0,
//    studentId:1,
//    name:1,
//    course:1

// })



// db.students.find().limit(3)


// db.students.find().skip(5)


db.students.find().skip(3).limit(6)

