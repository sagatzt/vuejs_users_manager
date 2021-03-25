const mongoose = require('mongoose')
 
mongoose.connect('mongodb://profe:pass1234@3.10.117.25:27017/profedb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify:false
})

module.exports=mongoose.connection
