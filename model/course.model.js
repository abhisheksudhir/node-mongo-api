//dependencies in node js aren't global and hence have to be imported in every file
const mongoose = require("mongoose");   //to connect nodejs environment with mongo db server

var CourseSchema = new mongoose.Schema({    //to create the schema
    courseName : {
        type : String,
        required : "Required",
    },
    courseId : {
        type : String
    },
    courseFee : {
        type : String
    },
});

//Defining Schema as model for mongoose
mongoose.model("Course", CourseSchema);