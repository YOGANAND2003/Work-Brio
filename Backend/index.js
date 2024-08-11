import  express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
import userRoute from "./routes/user.route.js"; 
import companyRoute from "./routes/company.route.js";
import jobRoute from "./routes/job.route.js";
import applicationRoute from "./routes/application.route.js";

dotenv.config({});
const app = express();

// yoganand0203
// fA4AqsE3pYCaE4Rc --1st password
//MOQp6tVuu8Vuc2PL - 2nd password
// app.get("/home", (req,res)=>{
//     return res.status(200).json({
//         message:"I am coming from Backend",
//         success:true 
//     })
// })

//middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
const corsOptions = {
    origin:'http://localhost:5173',
    credentials:true
}

app.use(cors(corsOptions));
    const PORT = process.env.PORT || 3000  ;

//API's
app.use("/api/v1/user",userRoute);
app.use("/api/v1/company",companyRoute);
app.use("/api/v1/job", jobRoute);
app.use("/api/v1/application", applicationRoute);

// The three apis that will be run are like from app.use("/api/v1/user",userRoute) :
// "http://localhost:8000/api/v1/user/register"
// "http://localhost:8000/api/v1/user/login"
// "http://localhost:8000/api/v1/user/profile/update"

app.listen(PORT, ()=>{
    connectDB();
    console.log(`Server running at port ${PORT}`);
});