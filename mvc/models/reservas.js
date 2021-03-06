const { time } = require("console");
const mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ReservasSchema = new mongoose.Schema({
  created_at: { type: Date, default: Date.now() },
  hour: { type: Date},
  date: {type: Date},
  document: {type: Number, required: true},
  name: { type: String, required: true, lowercase: true },
  phoneNumber: { type: Number},
  status: { type: Boolean, default: false },
  updated_at: { type: Date, default: Date.now() }
});

module.exports = mongoose.model("reservas", ReservasSchema);
