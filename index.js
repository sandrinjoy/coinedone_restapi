require('dotenv').config()
const  cors = require('cors')
const express =require('express')

const app = express()

const mongoose =require('mongoose')
mongoose.connect(process.env.DATABASE_URL,{ useNewUrlParser: true })
const db=mongoose.connection
db.on('error',(e)=>{
    console.error(e)
})

db.once('open',()=>{
    console.log('Database Connected')
})

app.use(cors())

//to accept json reqs

app.use(express.json())

app.get('/test',(req,res)=>{
    res.send("hi")
})

app.listen(process.env.PORT || 5000,()=>{
    console.log("server started")
})