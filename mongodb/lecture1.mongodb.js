use("FSD")

// db.createCollection("students")


// CRUD

//It is used add one document in a collection
// db.students.insertOne({
//     "name":"Alex",
//     "age":20,
//     "email":"alex123@gmail.com"
// })



//It is used to insert multiple documents in a collection
// db.students.insertMany([
//     {
//         "name":"John",
//         "age":21,
//         "email":"john123@gmail.com"

//     },
//     {
//          "name":"Jack",
//         "age":19,
//         "email":"jack123@gmail.com"

//     },
//     {
//          "name":"Alice",
//         "age":22,
//         "email":"alice123@gmail.com"

//     }
// ])


//It is used to find all matched documents from the collection

// db.students.find({"name":"Alex"})

// db.students.find()



// db.students.findOne({"name":"Alex"})



//it is used update one matched document from the collection

// db.students.updateOne({"name":"Jack"},{
//     $set:{
//         "age":30,
//         "email":"jobhi@gmail.com"
//     }
// })

//it is used to update all matched documents
// db.students.updateMany({"name":"Alex"},{
//     $set:{
//         "name":"Victor"
//     }
// })


//It is used to delte first matched occurrence from the collection
// db.students.deleteOne({"name":"Jack"})


//it is used to delete all matched documents from the collection
// db.students.deleteMany({"name":"Victor"})