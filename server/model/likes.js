var mongoose = require('mongoose')
var Schema = mongoose.Schema

let likesSchema = new Schema(
    {
        ticket_id:
            {
                type : mongoose.Types.ObjectId
            },
        user:
            {
                type : String
            }
    })

module.exports = mongoose.model('Likes', likesSchema)