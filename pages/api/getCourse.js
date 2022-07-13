import Course from "../../models/Course";
import connectDb from "../../middleware/mongoose";
const  handler=async(req,res)=>{
  let courses=await Course.find()
    res.status(200).json( courses)
}
export default connectDb(handler);