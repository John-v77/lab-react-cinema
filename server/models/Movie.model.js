const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const MovieSchema = new Schema({
  title: String,
  director: String,
  stars: [String],
  image: String,
  description: String, 
  showtimes: [String]
}) 

const movies = mongoose.model('Mov', MovieSchema);
module.exports = movies;