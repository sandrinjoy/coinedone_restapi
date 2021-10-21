require('dotenv').config()
const express =require('express')
const app = express()

const mongoose =require('mongoose')
mongoose.connect(process.env.DATABASE_URL,{useNewUrlParser:true})
const db=mongoose.connection
db.on('error',(e)=>{
    console.error(e)
})

db.once('open',()=>{
    console.error('Database Connected')
})

app.use(express.json())
app.listen(3000,()=>{
    console.log("server started")
})