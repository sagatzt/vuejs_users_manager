const mongoose = require('mongoose')

mongoose.connect('mongodb://profe:profe1234@3.10.117.25:27017/profedb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
})

module.exports=mongoose.connection