import { Schema, model, models } from 'mongoose';

const CourseSchema = new Schema({
    slug:String,
   picture:String,
   course_name:String,
   course_desc:String,
   course_duration:String,
   Price:String

  });
  

  
  export default mongoose.model('Course',CourseSchema);