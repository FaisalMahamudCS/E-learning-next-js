const mongoose = require('mongoose')
import { Schema, model, models } from 'mongoose';
const CourseSchema = new mongoose.Schema({
    slug:String,
   
   picture:String,
   course_name:String,
   course_desc:String,
   course_duration:String,
   Price:String

  });
  
mongoose.models={}
  const Course=model("Course",CourseSchema);
  export default Course;