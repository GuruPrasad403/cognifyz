import express, { Express, Request, Response, NextFunction } from "express"
import cors from 'cors'
import { PORT } from "./config/env";
import { serverHtml } from "./controllers/serverHtml";
import path from 'path'
import serverResponse from "./controllers/serverResponse";
const app: Express = express();

app.use(cors());
app.use(express.json());
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded())
// server main page 
app.get("/", serverHtml)
// server the response to the use 
app.post("/",serverResponse)

app.get("/health", (req: Request, res: Response, next: NextFunction) => {

    try {
        res.status(200).json({
            msg: "Hi there from the server",
            sucees: true
        })
    } catch (error) {
        console.log("error is ", error)
        next(error)
    }

})

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error("Error occurred:", err.message);

    res.status(500).json({
        success: false,
        message: "Internal Server Error",
        error: err.message
    });
});

app.listen(PORT, () => {
    console.log(`Server is  live http://localhost:${PORT}`);
})



