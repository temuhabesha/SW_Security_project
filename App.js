// module importing starting point
const express = require('express')
const userRoutes = require('./routs/userRouts')
const cors = require('cors')
const cookieparser = require('cookie-parser')
// module importing ending point

const app = express();

const PORT = 3000;
// midleware starting point
app.use(express.json())
app.use(cors())
app.use('/',userRoutes)
// midleware ending point
app.listen(PORT,(err)=>{
    if(!err){
        console.log(`the server is listen in port number ${PORT}`)
    }
    else{
        console.log(err)
    }
})