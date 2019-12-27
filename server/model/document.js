var mongoose = require('mongoose')
var Schema = mongoose.Schema

let documentSchema = new  Schema({
    name:
        {
            type: String
        },
    collegeId:
        {
          type: mongoose.Types.ObjectId
        },
    address:
        {
            type: String
        },
    senderId:
        {
            type: String
        },
    like:
        {
            type: Number
        },
    active:
        {
            type: Boolean
        },
    date:
        {
            type: Date,
            default: Date.now()
        }


})



module.exports = mongoose.model('Document', documentSchema)