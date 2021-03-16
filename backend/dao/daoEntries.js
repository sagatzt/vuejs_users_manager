const User = require('../models/User')
const Entrie = require('../models/Entry')

const daoUsers={}

//funcion para guardar una entrada
daoUsers.guardarEntrada = function guardarEntrada(entrie){
    let newEntrie = new User(entrie)
    newEntrie.save()
}

module.exports=daoUsers