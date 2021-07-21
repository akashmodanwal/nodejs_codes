const { readFileSync, writeFileSync } = require('fs')
const { compileFunction } = require('vm')
console.log("start")
const first = readFileSync('./content/test.txt','utf8')
//error by taking test1 instead of test2
const second = readFileSync('./content/test2.txt','utf8')
console.log(first,second)

writeFileSync('./content/result.txt',`Result of two string : ${first} , ${second}`)//overwrite
writeFileSync('./content/result.txt',`Result of two string : ${first} , ${second}`,{flag:'a'})
//appends
console.log("done with the task")
console.log("next task")
