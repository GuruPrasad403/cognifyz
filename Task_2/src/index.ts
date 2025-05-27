import { PORT } from "./config/env";
import express,{Express,Response,Request,NextFunction} from "express"
import cors from 'cors'
import path from 'path'
import { formSchema } from "./utils/formData.validate";
import { handelPostData } from "./controllers/handelPostData";
const app :Express = express();

app.use(cors());
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded())
console.log(__dirname)
app.set("views", path.join(__dirname, "views"));

  

app.get("/", (req:Request,res:Response,next:NextFunction)=>{
      const error = {
        name :"",
        date : "",
        password:"",
        country:"",
        email:""
    }
    try {
            res.render("form",{error})
    } catch (error) {
        console.log(error)
        next(error)
    }
})
// @ts-ignore
app.post("/", handelPostData);

// global error 
app.use((err:Error,req:Request,res:Response,next:NextFunction)=>{
console.log(err);
res.status(500).json({
    msg:err.message
})

})




app.listen(PORT,()=>{
    console.log(`Server Is Running at http://localhost:${PORT}`)
})