import { Application } from "../models/application.model.js";
import { Job } from "../models/job.model.js";

export const applyJob =async (req,res)=>{
    try {
        const userId = req.id;
        const jobId = req.params.id;
        if(!jobId){
            return res.status(400).json({
                message:"Job id id required",
                success:false
        });
        };

        //Check whether the user has already applied for this job or not
        const existingAppliation = await Application.findOne({job:jobId, applicant:userId});
        if(existingAppliation){
            return res.status(400).json({
                message:"You have Already applied for this job",
                status:false
            });
        };

        //Check whether the job exist or not
        const job = await Job.findById(jobId);
        if(!job){
            return res.status(404).json({
                message:"Job not Fond",
                success:false
            });
        };

        //Create a new application
        const newApplication = await Application.create({
            job:jobId,
            applicant:userId,
        });
    } catch (error) {
        console.log(error);
    }
}