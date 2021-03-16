const express = require('express')
const app = express()
var session = require('express-session')
const rtMain = require('./routers/rtMain')
const rtUsers = require('./routers/rtUsers')
const rtEntries = require('./routers/rtEntries')

//base de datos
const conexion = require('./mongodb')
conexion.on('error',console.error.bind(console,"Error de conexion mongo"))
conexion.once('open',()=>console.log("Conexión mongo OK!!"))

//gestión de sesiones
app.use(session({ 
    secret: 'miclavesecreta',
    resave: false,
    saveUninitialized: true
}))

//middlewares
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method')
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE')
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE')    
    next()
})

//enrutadores
app.use('/api',rtMain)
app.use('/api/users',rtUsers)
app.use('/api/entries',rtEntries)

app.listen(8081,(err)=>{
    if(err) console.log("Errores: ", err)
    console.log("Servidor backend arrancado en 8081")
})