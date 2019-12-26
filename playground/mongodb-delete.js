const http = require('http');
const {MongoClient,ObjectID} = require("mongodb");
const url = require("url");
var express=require('express');
var app=express();




http.createServer((req,res)=>{

    var q = url.parse(req.url, true).query;


    var firstName = q.fname;

    MongoClient.connect('mongodb://localhost:27017/',  (error,client)=>
    {

        if(error)
        {
            return console.log('unable to connect to db !');
        }

        console.log(counter++ +"  Connected Successfully !");


        var db = client.db("Test");
        var Collection = db.collection("Users");

        Collection.deleteMany({ firstName : firstName }).then((results)=>
        {
            res.writeHead(200,{"Content-Type" : JSON});
            res.write(JSON.stringify(results));
            res.end();

        },(Error) =>
        {
            console.log(Error);
        });



    });

}).listen(8080);