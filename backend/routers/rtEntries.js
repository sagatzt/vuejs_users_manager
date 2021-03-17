const express = require('express')
const rtEntries = express.Router()
const daoEntries = require('../dao/daoEntries')
const { user } = require('../mongodb')

rtEntries.post('/save',(req,res)=>{
    daoEntries.save(req.body)
        .then(entry=>res.json(entry))
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

///////////////////////////////////////////////

rtEntries.post('/addComment',(req,res)=>{
    if(req.session.user){
        req.body.author=req.session.user
        daoEntries.addComment(req.body)
            .then(comment=>res.json(comment))
    }else res.json({res:'No autorizado'})
})


module.exports= rtEntries