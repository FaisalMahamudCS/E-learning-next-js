import Course from "../../models/Course";
import connectDb from "../../middleware/mongoose";


const  handler=async(req,res)=>{
    if (req.method === 'POST') {
    const {slug,picture,course_name,course_desc,course_duration,
       Price}=req.body;
       try{
        let course=new Course({slug,picture,course_name,course_desc,course_duration,
            Price});
            const courseCreate=await course.save();
            return res.status(200).send({success:'Success'})
       }
       catch (error) {
        return res.status(500).send(error.message);
      }

    }
    else {
        res.status(422).send('req_method_not_supported');
      }
  }
  export default connectDb(handler);