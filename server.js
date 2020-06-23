const express = require('express')
const app = express()

app.get('/',(req,res)=>{
res.send({hi:'fucker'})
console.log('its works')
})

// create PORT 
const PORT = process.env.PORT || 5000;

app.listen(PORT)

