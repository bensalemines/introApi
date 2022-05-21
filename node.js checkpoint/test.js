const express = require('express');
const app = express();
const port = 5000;
app.get('/name/:user_name', function(req,res) {
  res.status(200);
  res.set('Content-type', 'text/html');
  res.send('<html><body>' +
  '<h1>Hello ' + req.params.user_name + '</h1>' +
  '</body></html>'
  );
});
  
app.get('*', function(req, res){
    res.end('Hello World');
});
app.listen(port, function(){
  console.log('The server is running, ' +
      'open your browser at http://localhost:%s', 
      port);
});