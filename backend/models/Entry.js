const mongoose = require("mongoose")
const {Schema} = mongoose

const schemaEntry = new Schema({
    title: {type:String,default:""},
    text: {type:String,default:""},
    img: {type:String,default:"/images/default.png"},
    date: {type:Date, default: new Date()},
    
})

class Entry{
    //set y get

    //privados

}

//plugins
schemaEntry.loadClass(Entry)
module.exports=mongoose.model('entries',schemaEntry)