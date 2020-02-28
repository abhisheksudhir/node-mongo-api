const connection = require("./model");
const express = require("express");
const application = express();  //creating express application
const path = require("path");   //internal node package
const expressHandlebars = require("express-handlebars");
const bodyparser = require("body-parser");
const CourseController = require("./controllers/courses");

//configuring the express application
application.use(bodyparser.urlencoded({
    extended : true
}));

//setting views folder of the application,_dirname provides directory from which code is executed,from that we are accesing the /views/
application.set('views', path.join(__dirname,"/views/"));

application.engine("hbs", expressHandlebars({
    extname : "hbs",
    defaultLayout : "mainlayout",
    layoutsDir : __dirname + "/views/layouts"
}));  //hbs:handlebars

application.set("view engine", "hbs");

//setting up application to send or handle root url
application.get("/", (req, res) => {
    // res.send('<h1>Hello world<h1>');
    res.render("index", {})
});

application.use("/course", CourseController);  //tells nodejs which controller will be used

application.listen("3000", () => {
    console.log("Server Started");
});