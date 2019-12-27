const http = require('http');
const {MongoClient,ObjectID} = require("mongodb");
const url = require("url");

var counter =0;

http.createServer((req,res)=>{

  var q = url.parse(req.url, true);
  
  var qdata = q.query;
  var firstName = qdata.Fname;
  var lastName = qdata.Lname;
  var email = qdata.email;
  var Mac_Address = qdata.Mac_Address;
   

    MongoClient.connect('mongodb://localhost:27017/',  (error,client)=>
    {
    
        if(error)
        {
          return console.log('unable to connect to db !');
        }
          
          console.log(counter++ +"  Connected Successfully !");


          var db = client.db("Test");
          var Collection = db.collection("Users");
          
           Collection.find().toArray().then((result)=> {

                  res.writeHead(200,{"Content-Type": "text"});
                  res.write(JSON.stringify(result));
                  res.end();
                  console.log(counter ++ +"  Successfully Fetched !")


          },(error)=>
          {

               res.write("Error in finding data." + error);
               console.log(counter ++ +"  Failure in Fetching !")

          });


        });
    
}).listen(8080);