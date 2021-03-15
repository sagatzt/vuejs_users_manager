const mongoose = require("mongoose")
const {Schema} = mongoose
const bcrypt = require('bcrypt')

const schemaUser = new Schema({
    firstname: {type:String,default:""},
    lastname: {type:String,default:""},
    username: {type:String,default:"new-user"},
    email: {type: String,required: true, index: true, unique: true},
    password:{type:String,default:""},
    provider:{type:String,default:'local'},
    active: {type:Boolean,default:false}
})
schemaUser.index({email:1},{unique:true})

schemaUser.pre('save', function(next) {
    bcrypt.hash(this.password, 6)
        .then(hash=>{
            this.password = hash
            next()
        })
})

class User{
    //set y get

    //privados
    checkPassword(password){
        return bcrypt.compareSync(password, this.password)
    }
}

//plugins
schemaUser.loadClass(User)
module.exports=mongoose.model('user',schemaUser)