const Entry = require('../models/Entry')
const Comment = require('../models/EntryComment')

const daoEntries={}

//funcion para guardar una entrada
daoEntries.save = (entry)=>{
    console.log(entry)
    return new Promise((resolved)=>{
        let newEntry = new Entry(entry)
        newEntry.save()
            .then(entry=>resolved(entry))
    })

}
//listar todas las entradas
daoEntries.list =()=>{
    return new Promise((resolved)=>{
        Entry.find().populate('author')
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

//eliminar entrada y comentarios
daoEntries.delete=(id)=>{
    return new Promise((resolved)=>{
        Entry.deleteOne({_id:id})
            .then(entry=>{
                resolved(entry)
            })
    })
    
}
////////////////////////////////////////////////////////
////////////// COMMENTS ////////////////////////////////

daoEntries.saveComment=(comment)=>{
    return new Promise((resolved)=>{
        let newComment=new Comment(comment)
        newComment.save().then(c=>{
            Entry.findOneAndUpdate(c._entry,{'$push':
                {'comments':c}
            }).then(entry=>resolved(entry))
        })
    })
}
/*daoEntries.saveComment=(comment)=>{
    return new Promise((resolved)=>{
        let newComment=new Comment(comment)
        newComment.save().then(c=>{
            Entry.findOneAndUpdate(c._entry,{'$push':
                {'imgs':c}
            }).then(entry=>resolved(entry))
        })
    })
}*/


module.exports=daoEntries