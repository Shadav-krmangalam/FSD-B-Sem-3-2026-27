const isLoggedIn = (req,res,next)=>{
    let logginStatus = true

    if(!logginStatus){
        return res.status(401).send("UnAUthorized...Please Login")
    }
    next()
}
module.exports = {isLoggedIn}