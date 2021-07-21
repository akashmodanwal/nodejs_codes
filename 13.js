// npm i <package 4 name>
// for ony particular project -folder

// global in every folder
// npm install -g <package name>

//package.json - manifest file (stores imp info about project/package)
//manual approach (create package.json in the root create properties etc)
//npm init (step by step )
//npm init -y (everything default)

const _ =require('lodash')
const items = [1,[2,[3,[4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems)
console.log(items)