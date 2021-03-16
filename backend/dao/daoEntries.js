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

//falta crear: buscar entrada por ID findById(id)

module.exports=daoEntries