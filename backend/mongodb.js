const mongoose = require('mongoose')

mongoose.connect('mongodb://profe:pass1234@3.10.117.25/profedb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
})

module.exports=mongoose.connection
