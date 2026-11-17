const isAuthorized = (req,res,next)=>{

   let token = req.headers.cookie

   if(!token || token != 12345){
    return res.status(401).send("UnAuthorized")
   }

   next()
}

module.exports = {isAuthorized}