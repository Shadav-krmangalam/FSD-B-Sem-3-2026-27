

use("FSD")


// db.students.find({course:"CSE"})



// db.students.aggregate([

//     {  $match

//     },
//     {  $group

//     },
//     {  $project

//     },
//     {$sort

//     }

// ])


// db.students.aggregate([
//     {
//         $match:{
//             "course":"CSE"
//         }
//     }
// ])


// db.students.aggregate([
//     {
//         $match:{
//             "age":{
//                 $lt:19
//             }
//         }
//     }
// ])


// db.students.aggregate([
//     {
//         $group:{
//             _id:"$course"
//         }
//     }
// ])

//ques5

// db.students.aggregate([
//     {
//         $group:{
//             _id:"$course",
//             noOfStudents:{
//                 $sum:1
//             }
//         }
//     }
// ])

//ques 6

// db.students.aggregate([
//     {
//         $group:{
//             _id:"$course",
//             avgAttendance:{
//                 $avg:"$attendance"
//             }
//         }
//     }
// ])



// db.students.aggregate([
//     {
//         $group:{
//             _id:"$course",
//             maximumMathMarks:{
//                 $max:"$marks.math"
//             }
//         }
//     }
// ])


// db.students.aggregate([
//     {
//         $match:{
//             "course":"CSE"
//         }
//     },
//     {
//         $group:{
//             _id:null,
//             avgAttendance:{
//                 $avg:"$attendance"
//             }
//         }
//     }
// ])


// db.students.aggregate([
//     {
//         $project:{
//             name:1,
//             course:1,
//             "marks.math":1
//         }
//     }
// ])

db.students.aggregate([
    {
        $project:{
            name:1,
            totalMarks:{
                $add:["$marks.math","$marks.dbms","$marks.web"]
            }
        }
    }
])