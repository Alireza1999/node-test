var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const _ = require('underscore');


let ticketSchema = new Schema(
    {

        user:
            {
                type: String,
                required : true,
                trim : true,
                minlength :5
            },
        subject:
            {
                type: String,
                trim: true,
                minlength: 2,
                required: true

            },
        mention:
            {
                type: String

            },
        text:
            {
                type: String,
                required: true,
                trim : true,
                minlength : 5
            },
        verified:
            {
                type: Boolean,
                default: false
            },
        date:
            {
                type: Date
            },
        answered:
            {
                type: Boolean,
                default: false
            },
        answer_text:
            {
                type: String
            },
        answer_date:
            {
                type: Date,
                default: Date.now()
            },
        liked:[
            {
                type: String,
                createIndex : {
                    unique : true

                }

            }],
        like_number:
            {
                type : Number,
                default: 0
            }

    });

ticketSchema.pre('update', function (next) {
    this.liked = _.unique(this.liked);
    next();
});

module.exports =  mongoose.model("Ticket",ticketSchema);