const eventEmitter = require("events")
const event = new eventEmitter()

let count=0;
event.on("apicount",()=>{
    count++;
    console.log("Api Count :",count)
})

module.exports = event