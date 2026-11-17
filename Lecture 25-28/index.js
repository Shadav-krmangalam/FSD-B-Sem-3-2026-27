const express = require("express")
const noteRoutes = require("./routes/notesRoutes")
const userRoutes = require("./routes/userRoutes")
const db = require("./config/db")
const morgan = require("morgan")
const app = express();
db();
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(morgan("combined"))

app.use("/api",noteRoutes)
app.use("/user",userRoutes)

 
app.listen(3000,()=>{
    console.log("Server is running on PORT : 3000")
})