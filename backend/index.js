require('dotenv').config()
const app=require('./app/src')
// const express=require('express')
// const app=express()
const port=process.env.PORT||7000

app.listen(port,()=>{
    console.log('now  listen to port:'+port)
})