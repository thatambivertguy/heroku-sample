const express=require('express')
const app=express()
app.get('/',(req,res)=>{
    console.log(' koi toh aaya ')
    res.send('Helloooooooooooo')
})

const PORT = process.env.PORT || 4444

app.listen(PORT,()=>{
    console.log('server started')
})