var express = require('express');
var BodyParser = require('body-parser');

var mongoose = require('./db/mongoose');
var {User} = require('./model/User');
var {ticket} = require('./model/ticket');

var app = express();

const nDate = new Date().toLocaleString('en-US', {
    timeZone: 'Asia/Tehran'
});

app.use(BodyParser.json());

app.post('/insertTicket', function (req, res) {
    console.log(req.body);
    var Ticket = new ticket(
        {
            user: req.body.user,
            subject: req.body.subject,
            mention: req.body.mention,
            text: req.body.text,
            date: nDate

        });

    Ticket.save().then(function (result) {

        res.status(200).send(result);
        console.log("saved successfully 1");

    }, function (e) {

        var Error = "Can not Save Data , Bad Request";
        res.status(400).send({Error});
        console.log("Can not save ")

    })

});

app.get('/getTickets', function (req, res) {

    ticket.find().then(function (Tickets) {

        res.status(200).send({Tickets})

    }, function (error) {

        res.status(400).send(error);

    });

});



app.listen(8080, function () {
    console.log("Server is running on port 8080");
});
