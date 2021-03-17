const mongoose = require('mongoose')

mongoose.connect('mongodb://', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify:false,
})

module.exports=mongoose.connection
