const express = require("express");
const mongoose = require("mongoose");   //to connect nodejs environment with mongo db server

const router = express.Router();    //setting up router
const CourseModel = mongoose.model("Course");

router.get("/add",(req, res) => {
    res.render("add-course");
});

router.post("/add",(req, res) => {
    //setting the courses
    var course = new CourseModel();
    course.courseName = req.body.courseName;
    course.courseDuration = req.body.courseDuration;
    course.courseFees = req.body.courseFees;
    course.courseId = Math.ceil(Math.random()*10000000)+"";
    course.save((err, docs) => {
        if(!err){
            // res.redirect("/course/list");
            res.json({message:"sucessful",status:"OK"});
        }
        else{
            res.send("error");
        }
    });
});

router.get("/list", (req, res)=> {

    CourseModel.find((err, docs) => {   //docs includes anything that is in the CourseModel
        if(!err){
            console.log(docs);
            res.render("list", {data : docs});
        }
        else{
            res.send("error");
        }
    });
});

module.exports = router;