var mongoose = require('mongoose')
var Schema = mongoose.Schema

let newSchema = new  Schema({
    subject:
        {
            type: String
        },
    collegeId:
        {
            type: mongoose.Types.ObjectId
        },
    body:
        {
            type: String
        },
    picture:
    [
        {
            _id:
                {
                    type: mongoose.Types.ObjectId
                }
        }
    ],
    senderId:
        {
            type: mongoose.Types.ObjectId
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



module.exports = mongoose.model('New', newSchema)