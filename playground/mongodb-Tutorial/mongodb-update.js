const {MongoClient,ObjectID} = require("mongodb");
const url = require("url");
var express=require('express');
var app=express();


app.get('/api/update',function (req,res)
{

    MongoClient.connect("mongodb://localhost:27017/",function(error,client) {
        if (error) {
            res.send("Can not Connect to Mongo");
        }
        var db = client.db("Test");
        var collection = db.collection('Users');

        collection.findOneAndUpdate(
            {_id: new ObjectID('5e048c28bdf52f89df103733')},
            {
                $set: {
                    name: 'Hossein'
                }
            }
            , {returnOriginal: false}).then(function (result) {

            console.log(result);

        } , function (error) {
            console.log("Erorodfd");
        })



    })}
).listen(8080);