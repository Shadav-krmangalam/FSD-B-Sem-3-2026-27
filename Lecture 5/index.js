// const os = require("os")

// // To get the platform of operating sytem on which node.js is running
// console.log(os.platform())


// //to get the architecture of your processor
// console.log(os.arch())


// console.log(os.hostname())

// //to get the time since when the device is opened
// console.log(os.uptime())

// // to check the version of operating system
// console.log(os.version())


// console.log(os.cpus())

// console.log(os.cpus().length)





// const fs = require("fs")

// fs.writeFile("data.txt","Hello World",(err)=>{
//     if(err) console.log(err)
//         else console.log("File Written")
// })


//READ

// fs.readFile("data.txt","utf8",(err,res)=>{
//     if(err) console.log(err)
//         else console.log(res)
// })

//update file

// fs.appendFile("data.txt","\nBackend development",(err)=>{
//     if(err) console.log(err)
//         else console.log("File updated")
// })


//Delete File

// fs.unlink("data.txt",(err)=>{
//     if(err) console.log(err)
//         else console.log("File deleted")
// })


// const path = require("path")

// const filePath = path.join("home","users","temp","data.txt")

// console.log(filePath)

// console.log(path.dirname(filePath))

// console.log(path.basename(filePath))

// console.log(path.extname(filePath))


// const path= require("path")
// const fs = require("fs")

// const filePath = path.join("home","users","temp","data.txt")

// fs.mkdir(path.dirname(filePath),{recursive:true},(err)=>{
//     if(err) console.log(err)
//         else {
    
//             fs.writeFile(filePath,"",(err)=>{
//                 if(err) console.log(err)
//                     else console.log("File created")
//             })
//         }
// })
// const fs = require("fs")
// fs.mkdir("C:\FSD B 3rd Sem\Lecture 3\home\data",(err)=>{
//     if(err) console.log(err)
//         else console.log("folder created")
// })



//CRYPTO


// const crypto = require("crypto")


// let data = crypto.createHash("sha256").update("abc123").digest("hex")

// console.log(data)

const dns = require("dns")


dns.lookup("google.com",(err,address,family)=>{
    if(err) console.log(err)
        else{
    console.log(address)
    console.log(family)
}
})