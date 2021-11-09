const express = require("express"),
  router = express.Router(),
  reservaCtrl = require("../controllers/reserva.controller");

router.post("/", reservaCtrl.create);

module.exports = router;
