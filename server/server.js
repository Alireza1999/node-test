var express = require('express');
var BodyParser = require('body-parser');

var mongoose = require('./db/mongoose');
var ObjectId = require('mongoose').Types.ObjectId;
var User = require('./model/User');
var ticket = require('./model/ticket');
var likes = require('./model/likes');

var app = express();

const nDate = new Date().toLocaleString('en-US', {
    timeZone: 'Asia/Tehran'
});

app.use(BodyParser.json());

app.post('/add-ticket', function (req, res) {
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

app.get('/get-tickets', function (req, res) {

    //
    // likes.find({user: req.body.user}).then((result) => {
    //
    //     result.toArray
    //
    // }, (error) => {
    //
    // });
    //
    // ticket.find({}).limit(15).then(function (result) {
    //
    //     for (i = 0; i < result.toArray.length; i++) {
    //         likes.find({ticket_id: result.toArray.get(i)._id}).then((like_result, like_error) => {
    //
    //         })
    //     }
    //
    // }, function (error) {
    //
    // });

    ticket.find({}, {liked: 0}).then(function (Tickets) {

        res.status(200).json({Tickets});

    }, function (error) {

        res.status(400).send(error);

    });

});

app.post('/like-ticket', function (req, res) {


    // newlikes = new likes(
    //     {
    //         ticket_id: req.body.ticket_id,
    //         user: req.body.user
    //     });
    //
    // newlikes.save().then((result) => {
    //     res.status(200).json({status: "ok"});
    // }, (error) => {
    //     res.status(400).json({error});
    // });

    ticket.findOneAndUpdate(
        {_id:  req.body.ticket_id },
        {
            $push: {liked: req.body.user},
            $inc: {like_number: 1}
        })
        .then((result) => {
            res.status(200).json({Status: "ok"});

        }, (error) => {
            console.error(error);
            res.status(400).json({Status: "error in liking"});
        });


});


app.listen(8080, function (Error) {
    console.log("Error in app.listern() happened !!");

}, function (result) {
    console.log("Server is running on port 8080");
});