const mongoose = require("mongoose")
const {Schema} = mongoose
const Comments = require('./EntryComment')

const schemaEntry = new Schema({
    title: {type:String},
    text: {type:String},
    imgs: [],
    date: {type:Date, default: new Date()},
    author:{type:Schema.Types.ObjectId,ref:'user'},
    comments:[{type:Schema.Types.ObjectId,ref:'entryComment'}]
})

class Entry{
    //privados

}

schemaEntry.pre('remove', function(next) {
    var entry=this
    console.log(entry)
    Comments.deleteMany({entry:entry._id})
    next()
})

//plugins
schemaEntry.loadClass(Entry)
module.exports=mongoose.model('entries',schemaEntry)