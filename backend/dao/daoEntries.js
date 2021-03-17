const Entry = require('../models/Entry')
const EntryComment = require('../models/EntryComment')

const daoEntries={}

//funcion para guardar una entrada
daoEntries.save = (entry)=>{
    return new Promise((resolved)=>{
        let newEntry = new Entry(entry)
        newEntry.save()
            .then(entry=>resolved(entry))
    })

}
//listar todas las entradas
daoEntries.list =()=>{
    return new Promise((resolved)=>{
        Entry.find().populate('author').populate('comments')
            .then(entries=>resolved(entries))
    })
}

//listar una entrada por ID
daoEntries.findById =(id)=>{
    return new Promise((resolved)=>{
        Entry.findOne({_id:id})
            .then(entry=>resolved(entry))
    })
}


////////////////////////////////////////////////////////
////////////// COMMENTS ////////////////////////////////

daoEntries.addComment = (comment)=>{
    return new Promise((resolved)=>{
        let newComment = new EntryComment(comment)
        newComment.save().then(com=>{
            Entry.findOneAndUpdate({_id:com.entry},{'$push':
            {'comments':com}}).then(entry=>{
                resolved(com)
            })
        })
    })
}

module.exports=daoEntries