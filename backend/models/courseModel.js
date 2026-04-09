const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
    courseName: String,
    instructor: String,
    category: String,
    duration: Number,
    level: String,
    thumbnail: String
},
{timestamps: true});

module.exports = mongoose.model("Course", courseSchema);