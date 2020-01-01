var mongoose = require('mongoose')
var Schema = mongoose.Schema

let likesSchema = new Schema(
    {
        ticket_id:
            {
                type : String
            },
        user:
            {
                type : String,
            }
    });



module.exports = mongoose.model("Likes", likesSchema,'likes');