let express = require("express");
let dbobjects = require("./db/connection");
let app = express();
let  projectRoute = require(",/routes/projects");

//var app = require('express')();
let http = require('http').createServer(app);
let io = require('socket.io')(http);
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;




var port = process.env.PORT || 8080;

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.jason());
app.use('/api/projects',projectRoute);
app.get("/addCode/:n1/:n2",function(request,response){
  let n1 = request.params.n1
  let n1 = request.params.n2
  let result = n1 + n2 || null;
  if (result == null){
    response.status(400).json({statusCode:400,err:"Both input should be a number"})
  }
  response.joson({statusCode :200,result:result
});

const dummyProject={
  author:'alessio',
  imageUrl:'',
  videoUrl:'',
  uniqueID:'',
  description:'choose an apliances to control it.',
  title:'controller'
}
let dummyData=[dummyProject,dummyProject]

//require project data from server
app.get('/project01',(req,res)=>{
  console.log('projects requested')
res.send(dummyData)
})
app.post('/project01',(req,res)=>{
  console.log('projects requested')
  console.log('body',req.body)
  let project=req.body;
  dummyData.push(project)
  res.send({result:200})
})

app.get("/test", function (request, response) {
  var user_name = request.query.user_name;
  response.end("Hello " + user_name + "!");
});


//socket test
io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
  setInterval(()=>{
    socket.emit('number', parseInt(Math.random()*10));
  }, 1000);

});

dbobjects.connectToDatabase(function (err){
  if (err){
    console.error(err);
    process.exit();
  }




  http.listen(port,()=>{
    console.log("Listening on port ", port);
  });
});
//this is only needed for Cloud foundry 
require("cf-deployment-tracker-client").track();




//Database connection
const uri = ""


























