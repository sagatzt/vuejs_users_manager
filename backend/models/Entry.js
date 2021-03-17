const mongoose = require("mongoose")
const {Schema} = mongoose

const schemaEntry = new Schema({
    title: {type:String},
    text: {type:String},
    imgs: [{type:String}],
    date: {type:Date, default: new Date()},
    author: {type:Schema.Types.ObjectId,ref:'user'},
    comments:[{type:Schema.Types.ObjectId,ref:'entryComment'}]
})

class Entry{
    //set y get

    //privados

}


//plugins
schemaEntry.loadClass(Entry)
module.exports=mongoose.model('entries',schemaEntry)