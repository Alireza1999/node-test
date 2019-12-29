var mongoose = require("mongoose");

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp')
    .then(
        (resulr) => {
            console.log("Connected to DB");
        },
        (Error) => {

            console.log("Fail to connect to db !!");
            console.error(Error);
        }
    );

module.exports = {mongoose};
