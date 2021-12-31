const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://smartkc:smartkc@smartincherian.jnt4a.mongodb.net/Library?retryWrites=true&w=majority');
const Schema = mongoose.Schema;


const AuthorSchema = new Schema({
    title : String,
    image: String,
    about: String
});

const authordata = mongoose.model('authordata',AuthorSchema);

module.exports = authordata;
