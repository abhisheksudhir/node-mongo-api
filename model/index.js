const mongoose = require("mongoose");   //to connect nodejs environment with mongo db server

mongoose.set('useUnifiedTopology', true);//to remove warning that you were getting before
mongoose.connect("mongodb://localhost:27017/Edureka", { useNewUrlParser: true }, (error) => {
    if(!error){
        console.log("success");
    }
    else{
        console.log("error");
    }
});

const Course = require("./course.model");