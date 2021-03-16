const express = require('express')
const rtMain = express.Router()

rtMain.get('/welcome',(req,res)=>{
    res.json({res: 'ok'})
})


module.exports= rtMain