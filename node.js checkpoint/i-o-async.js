var fs =require('fs')

fs.readFile('text.txt','utf-8',(err,data)=>{
    const lines = data.split('\n').length-1;
    console.log(lines)
})
