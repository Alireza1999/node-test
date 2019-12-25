const http = require('http');
const {MongoClient,ObjectID} = require("mongodb");
const url = require("url");



http.createServer((req,res)=>{

  var q = url.parse(req.url, true);
  
  var qdata = q.query;
  var firstName = qdata.Fname;
  var lastName = qdata.Lname;
  var email = qdata.email;
  var Mac_Address = qdata.Mac_Address;
   

    MongoClient.connect('mongodb://localhost:27017/', (error,client)=>
    {
    
        if(error)
        {
          return console.log('unable to connect to db !');
        }
          
          console.log("Connected Successfully !");
    

          var db = client.db("Test");
          var Collection = db.collection("Users");
          
          Collection.find({ _id : new ObjectID('5e01f61a7e5669258c4c4dfe')}).toArray().then((result,error)=>
          {
            if (error)
            {
              return res.write("Error in finding data.");
            }
            res.writeHead(200,{"Content-Type": "json"});
            res.write(JSON.stringify(result));
            res.end();

          });

        });
    
}).listen(8080);