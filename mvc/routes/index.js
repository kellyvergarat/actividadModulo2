const { Router } = require('express'),
router = Router()

router.use('/reserva', require('../routes/reserva.route'))  

module.exports = router