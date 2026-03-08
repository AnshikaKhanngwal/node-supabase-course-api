import express from "express"
import supabase from "../supabaseClient"

const router = express.Router()

router.get("/courses", async (req, res) =>{

    const {data, error} = await supabase
    .from("courses")
    .select("*")

    if(error){
        return res.status(500).json({erroe : error.message})
    }
    res.json(data)
})



router.post("/enroll", async (req,res)=>{
    const{student_name, course_id} = req.body


    const {data, roor} = await supabase
    .from("enrollments")
    .insert([{student_name, course_id}])

    if(error){
        return res.status(500).json({error: error.message})
    }

    res.json({
        message:"Enrollment successful",
        data
    })

})

export default router