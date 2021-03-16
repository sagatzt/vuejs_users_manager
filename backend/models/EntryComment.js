const mongoose = require("mongoose")
const {Schema} = mongoose

const schemaEntryCooment = new Schema({
    rating: {type:Number,default:5},
    message: {type:String,default:""},
    
})

class EntryComment{
    //set y get

    //privados

}

//plugins
schemaEntryComment.loadClass(EntryComment)
module.exports=mongoose.model('entryComment',schemaEntryComment)