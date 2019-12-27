var express = require('express');
var BodyParser = require('body-parser');

var mongoose  = require('./db/mongoose');
var {User} =require('./model/User');
var {ticket} = require('./model/ticket');

var app = express();

const nDate = new Date().toLocaleString('en-US', {
    timeZone: 'Asia/Tehran'
});

app.use(BodyParser.json());

app.post('/insertTicket',function (req,res)
{
    console.log(req.body);
    var Ticket = new ticket(
        {
            user : req.body.user,
            subject : req.body.subject,
            mention : req.body.mention,
            text : req.body.text,
            date : nDate

        });

    Ticket.save().then(function (result)
    {

        res.send(result);
        console.log("saved successfully 1");

    },function (error) {

        console.log("Can not save ")

    })

});

app.listen(8080,function ()
{
    console.log("Server is running on port 8080");
});
