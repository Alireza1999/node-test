const http = require("http");
const mongo_client = require("mongodb").MongoClient;
const url = require("url");


http.createServer((req,res)=>{

  var q = url.parse(req.url, true);
  
  var qdata = q.query;
  var firstName = qdata.Fname;
  var lastName = qdata.Lname;
  var email = qdata.email;
  var Mac_Address = qdata.Mac_Address;
   

    mongo_client.connect('mongodb://localhost:27017/', (error,client)=>
    {
    
    if(error)
    {
      return console.log('unable to connect to db !');
    }
    else
    {
      console.log("conected succesfully !");
    }
    
    client.db("Test").collection('Users').insertOne(
      { 
        firstName : firstName,
        lastName : lastName,
        email : email ,
        Mac_Address : Mac_Address
      
      },(err,result) =>
        {
            if(err)
            {
            return console.log("can not insert data ! ");
            }
    
            console.log("data inserted successfully.\n" + JSON.stringify(result.ops[0]._id.getTimestamp()));
            
            res.writeHead(200,{"Content-Type" : "text" });
            res.write(JSON.stringify({Date :result.ops[0]._id.getTimestamp(),
              Status : "Done"}));
            res.end();

    });
    
    client.close();
    
    });
    
}).listen(8080);