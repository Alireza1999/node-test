const http = require('http');
const {MongoClient,ObjectID} = require("mongodb");
const url = require("url");

var counter =0;

http.createServer((req,res)=>{

    var q = url.parse(req.url, true);

    MongoClient.connect('mongodb://localhost:27017/',  (error,client)=>
    {

        if(error)
        {
            return console.log('unable to connect to db !');
        }

        console.log(counter++ +"  Connected Successfully !");


        var db = client.db("Test");
        var Collection = db.collection("Users");

        Collection.findOneAndDelete({_id :new ObjectID("5e03bef95625f37ee208ddab")}).then((results)=>
        {

            res.writeHead(200,{"Content-Type" : JSON});
            res.write(JSON.stringify(results));
            res.end();

        });



    });

}).listen(8080);