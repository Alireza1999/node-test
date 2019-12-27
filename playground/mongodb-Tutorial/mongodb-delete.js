const http = require('http');
const {MongoClient,ObjectID} = require("mongodb");
const url = require("url");
var express=require('express');
var app=express();


app.get('/getUsers',function(req,res){


var Req_URL = url.parse(req.url,true);

var query = Req_URL.query;

var _id = query._id;


    if (ObjectID.isValid(_id))
    {
        MongoClient.connect("mongodb://localhost:27017/",function(error,client)
        {
        if(error){
            res.send("Can not Connect to Mongo");
        }
        var db  = client.db("Test");
        var collection = db.collection('Users');
        
        collection.find({_id : new ObjectID(_id)}).toArray().then(function(result)
        {
            if (result.length >0)
            {

                res.send(JSON.stringify(result));

            }else{

                res.send("Nothing found !");
            }
            
        }, function(error)
        {

            res.send("can not fetch data .");    
        });
        
        

    })   

    }else{

        var response = { Error : 'invalid id'};
            
        res.send(JSON.stringify(response));

    }

}).listen(8080);


// http.createServer((req,res)=>{

//     var q = url.parse(req.url, true).query;


//     var firstName = q.fname;

//     MongoClient.connect('mongodb://localhost:27017/',  (error,client)=>
//     {

//         if(error)
//         {
//             return console.log('unable to connect to db !');
//         }

//         console.log(counter++ +"  Connected Successfully !");


//         var db = client.db("Test");
//         var Collection = db.collection("Users");

//         Collection.deleteMany({ firstName : firstName }).then((results)=>
//         {
//             res.writeHead(200,{"Content-Type" : JSON});
//             res.write(JSON.stringify(results));
//             res.end();

//         },(Error) =>
//         {
//             console.log(Error);
//         });



//     });

// }).listen(8080);