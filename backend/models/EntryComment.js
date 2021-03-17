const mongoose = require("mongoose")
const {Schema} = mongoose

const schemaEntryComment = new Schema({
    rating: {type:Number,default:5},
    message: {type:String,default:""},
    entry:{type:Schema.Types.ObjectId,ref:'entrie'}
})

class EntryComment{
    //set y get

    //privados

}

//plugins
schemaEntryComment.loadClass(EntryComment)
module.exports=mongoose.model('entryComment',schemaEntryComment)