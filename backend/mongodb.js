const mongoose = require('mongoose')

mongoose.connect('mongodb://', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
})

module.exports=mongoose.connection
