const express = require('express')
const rtEntries = express.Router()
const daoEntries = require('../dao/daoEntries')

rtEntries.post('/save',(req,res)=>{
    daoEntries.save(req.body)
    res.json({res: 'ok'})
})

rtEntries.get('/get/:id',(req,res)=>{
    daoEntries.findById(req.params.id)
        .then(entry=>res.json(entry))
})

rtEntries.get('/list',(req,res)=>{
    daoEntries.list()
        .then(entries=>res.json(entries))
})

rtEntries.post('/delete/:id',(req,res)=>{
    daoEntries.delete(req.params.id)
    res.json({res: 'ok'})
})



module.exports= rtEntries