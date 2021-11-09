const ctrlReserva = {},
  mongoose = require("mongoose"),
  Reserva = require("../models/reservas")

ctrlReserva.create = async (req, res) => {
  const newReserva = new Reserva({
    hour: req.body.hour,
    date: req.body.date,
    document: req.body.document,
    name: req.body.name,
    phoneNumber: req.body.phoneNumber
  });
  await newReserva.save();
  res.json({status:true});
};

ctrlReserva.delete = async (req,res) => {
  const {_id} = req.params ;
  const reserva = await Reserva.deleteOne({_id:_id});
  res.json({status : true});
}

ctrlReserva.list = async (req,res) => {
  const reservas = await Reserva.find();
  res.json(reservas);
}

ctrlReserva.update = async (req, res) => {
  console.log(req.body);
  const {_id, status, hour, date, document, name, phoneNumber} = req.body;
  await Reserva.findOneAndUpdate({ _id: _id }, 
    { hour:hour, 
      status:status, 
      date:date, 
      document:document, 
      name:name, 
      phoneNumber:phoneNumber
    })
  res.json({status : true});
}

/* ctrlUser.enable = async (req, res) => {
  const {_id, status} = req.body
  await User.findOneAndUpdate({_id:_id}, {status:status})
  res.json({status: true})
}*/

module.exports = ctrlReserva;
