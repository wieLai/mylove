// const fs = require('fs')
var fs = require('fs')
// fs.readFile('./a.text','utf-8',(err,data)=>{
//    if(err){
//        console.log(err)
//    }else{
//        console.log(data)
//    }
// })
// fs.readFile('./b.text','utf-8',(err,data)=>{
//    if(err){
//        console.log(err)
//    }else{
//        console.log(data)
//    }
// })
// fs.readFile('./c.text','utf-8',(err,data)=>{
//    if(err){
//        console.log(err)
//    }else{
//        console.log(data)
//    }
// })



// promise读取文件
function readFile(path){
    return new Promise((resolve,reject)=>{
        fs.readFile(path,'utf-8',(err,data)=>{
         if(err){
            reject(err)
         }else{
             resolve(data) 
         }
      })     
      })
}

let p = readFile("./a.text")
let p1 = readFile("./b.text")
let p2 = readFile("./c.text")

p.then(res=>{
    console.log(res)
    return p1
})
.then(res=>{
    console.log(res)
})