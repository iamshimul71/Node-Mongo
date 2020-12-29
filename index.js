var express = require('express')
var app = express()



app.get('/' ,(req, res)=>{

    res.send('thank you very much')
})



app.listen(3005, ()=> console.log('Listing to port 3000'))