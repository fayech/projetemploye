const  mongoose = require('mongoose');

//data base table
let employeeScheme = new mongoose.Schema({
    name: String,
    designation : String,
    salary : Number
});

module.exports = mongoose.model('Employee',employeeScheme);