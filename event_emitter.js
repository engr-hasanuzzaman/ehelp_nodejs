const EventEmitter = require("events")

class Event extends EventEmitter {}

const job = new Event()
job.on("done", (timeDone) => {
    console.log("Job done time is " + timeDone)
})

job.emit("done", new Date())
job.removeAllListeners()

knock = new Event()
// once ensure that knock will be fire only one time
knock.once("knock", ()=>{
    console.log("this is first knock")  
})

// knock.on('knock', ()=> {
//    console.log('this is second knock')
// })

knock.emit("knock")
// knock.removeAllListeners()
knock.emit("knock")
