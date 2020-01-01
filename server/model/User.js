var mongoose  = require('mongoose');

var Schema = mongoose.Schema;

var UserSchema = new Schema({

    First_Name:
        {
            type : String ,
            required : true ,
            minlength : 1 ,
            trim : true},
    Last_Name:

        {
            type: String ,
            required: true ,
            minlength: 1 ,
            trim: true},
    Email:
        {
            type : String,
            required :true ,
            minlength :1 ,
            trim :true},

    Password:
        {
        type : String ,
        required : true},

    createdAt:
        {
            type : Number ,
            default : null}
});

module.exports =mongoose.model('user',UserSchema);
