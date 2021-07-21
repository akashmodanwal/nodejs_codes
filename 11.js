const { captureRejectionSymbol } = require('events')
const {readFile , writeFile} = require('fs')
const { compileFunction } = require('vm')
console.log("start")
readFile('./content/test.txt','utf8',(err,result)=>{
    if(err){
        console.log(err)
        return
    }
    const a = result;
    console.log(result)
    readFile('./content/test2.txt','utf8',(err,result)=>{
        if(err){
            console.log(err)
            return
        }
        const b = result
        console.log(result)
        writeFile('./content/result-async.txt',`Here is result : ${a} , ${b}`,(err,result) => {
            if(err){
                console.log(err)
                return 
            }
            console.log("Done with this task")
        })
    })
})
//executed before done with the task
//asynchronous 
console.log("Starting next task")
