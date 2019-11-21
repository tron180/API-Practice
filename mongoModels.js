const mongoose = require("mongoose");

var Person = mongoose.model(
    "Person",
    new mongoose.Schema({
      id: String,
      name: String,
      birth_year: Number,
      age: Number
    })
  );

  var Vehicle = mongoose.model(
    "Vehicle",
    new mongoose.Schema({
      id: String,
      name: String,
      company_name: String,
      convertible: Boolean
    })
  );

module.exports = {
    "person": Person,
    "vehicle": Vehicle
}