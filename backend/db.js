const mongoose = require('mongoose');
const connectMongo=()=>{mongoose.connect("mongodb://127.0.0.1:27017/courseDB")
    .then(() => console.log("DB connected successfully"))
    .catch(err => console.error(err));
}
module.exports=connectMongo;