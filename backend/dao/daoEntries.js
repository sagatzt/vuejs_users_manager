const Entry = require('../models/Entry')

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
        Entry.find()
            .then(entries=>resolved(entries))
    })
}

//listar todas las entradas
daoEntries.findById =(id)=>{
    return new Promise((resolved)=>{
        Entry.findOne({_id:id})
            .then(entry=>resolved(entry))
    })
}


////////////////////////////////////////////////////////
////////////// COMMENTS ////////////////////////////////



module.exports=daoEntries