const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const PhotosSchema = new Schema({
  
  title: {
    type: String,
    required: true
  },
  source: {
    type: String,
    required: true
  },
  
  
  
});

module.exports = Photos = mongoose.model("photos", PhotosSchema);
