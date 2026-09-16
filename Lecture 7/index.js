const http = require("http")

const server = http.createServer((req,res)=>{
    // res.write("<h1>Hello World</h1>")
    // res.write("<h2>Hello World</h2>")
    // res.write("<h3>Hello World</h3>")
    // res.end()

// let abc = "alex"
// let cde = 123456
//    if(req.url==="/"){
//     res.write("<h1>Home page</h1>")
//     res.end(abc)
//    }

//    if(req.url === "/about"){
//     res.write("<h1>About Page</h1>")
//     res.end(cde)
//    }

    // if(req.method === "GET"){
    //     res.write("<h1>Data Retreiving</h1>")
    //     res.end()
    // }

    // if(req.method === "POST"){
    //     res.write("</h1>Data Created</h1>")
    //     res.end()
    // }


    // if(req.url==="/user" && req.method==="GET"){
    //     res.write("<h1>Get User Method</h1>")
    //     res.end()
    // }

    // if(req.url==="/user" && req.method === "POST")
    // {
    //     res.write("<h1>Post User Method</h1>")
    //     res.end()
    // }


    // console.log(req.headers)
    // res.end()
 

    if(req.url === "/"){
        let body = ""

        req.on("data",(chunk)=>{
            body+=chunk
        })

        req.on("end",()=>{
            console.log(body)
            res.end(body)
        })


    }


})

server.listen(3000,()=>{
    console.log("Server is running on port 3000")
})