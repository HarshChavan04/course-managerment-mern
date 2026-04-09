const express = require('express');
const connectMongo = require('./db');
const routes=require('./routes/courseRoutes');

const cors = require('cors');
const app = express();
connectMongo()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/course',routes)

app.listen(4000,()=>{
    console.log('Server is running');
    
})