require('dotenv').config();

var app=require('./app/server.js');

app.listen(8070,function(){
  console.log('server is running');
})