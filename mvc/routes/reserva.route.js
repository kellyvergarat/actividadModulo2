const express = require("express"),
  router = express.Router(),
  reservaCtrl = require("../controllers/reserva.controller");

router.post("/", reservaCtrl.create);
router.delete('/:_id', reservaCtrl.delete);
router.get("/", reservaCtrl.list);
router.put('/', reservaCtrl.update)

module.exports = router;
