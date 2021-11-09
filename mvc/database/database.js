const mongoose = require('mongoose'),
config = require('../config/config')

mongoose.Promise = global.Promise;
//mongoose.set('useFindAndModify', false);
mongoose.connect(config.Urldb, {  useUnifiedTopology: true , useNewUrlParser: true })
 .then(db => console.log("Connect to DB"))
 .catch(err => console.log(err))

 
module.exports = mongoose

