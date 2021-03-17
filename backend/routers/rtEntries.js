const express = require('express')
const rtEntries = express.Router()
const daoEntries = require('../dao/daoEntries')

rtEntries.post('/save',(req,res)=>{
    console.log(req.session)
    if(req.session.userId){

        req.body.author=req.session.userId
        daoEntries.save(req.body)
            .then(entry=>res.json(entry))
    }else res.json({res:'no autorizado'})
})

rtEntries.get('/get/:id',(req,res)=>{
    daoEntries.findById(req.params.id)
        .then(entry=>res.json(entry))
})

rtEntries.get('/list',(req,res)=>{
    daoEntries.list()
        .then(entries=>res.json(entries))
})

rtEntries.delete('/delete/:id',(req,res)=>{
    daoEntries.delete(req.params.id)
        .then(entry=>res.json(entry))
})

////////////////////////////////////
rtEntries.post('/saveComment',(req,res)=>{
    daoEntries.saveComment(req.body)
        .then(entry=>res.json(entry))
})




module.exports= rtEntries