const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://LijunLin:<woaiwo545P>@cluster0.14ew2.mongodb.net/mpreoject01?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });


let dbConnection;
module.exports = {
    connectToDatabase:function(callback){
        client.connect(function(err,db){
            if(err || !db){
                return callback(err);
            }
            dbConnection = db.db("project01");
            console.log("Connect to mongo at last");
            return callback();
        });
    },
}



client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

getDB : ()=>{
    return dbConnection;
},
disconnect:() =>{
    client.close();


}

