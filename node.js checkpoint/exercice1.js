var http = require ('http')

const server = http.createServer((request,response)=>{
    response.write('HELLO WORLD');
    response.end();
})
server.listen(4050);
console.log('HELLO WORLD')
