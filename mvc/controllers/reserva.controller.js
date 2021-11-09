const ctrlReserva = {},
  mongoose = require("mongoose"),
  Reserva = require("../models/reservas")

ctrlReserva.create = async (req, res) => {
  const newReserva = new Reserva({
    hour: req.body.hour,
    date: req.body.date,
    document: req.body.document,
    name: req.body.name,
    phoneNumber: req.body.phoneNumber,
    user_created: mongoose.Types.ObjectId(req.body.user_created),
  });
  await newReserva.save();
};

module.exports = ctrlReserva;
