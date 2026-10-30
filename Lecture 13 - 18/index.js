const express = require("express")
const noteRoutes = require("./routes/notesRoutes")
const morgan = require("morgan")
const app = express();
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(morgan("combined"))

app.use("/api",noteRoutes)

 
app.listen(3000,()=>{
    console.log("Server is running on PORT : 3000")
})