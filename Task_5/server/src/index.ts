import express, {type Express, Request,Response,NextFunction} from 'express'
import { PORT } from './config/env';
import cors from 'cors'
import authRouter from './routes/auth.router';
import cookieParser from 'cookie-parser';
import snippet from './routes/snippet.router';

const app : Express = express();

app.use(cors())
app.use(express.json())
app.use(cookieParser());

app.get('/', (req : Request  ,res:Response,next:NextFunction )=>{
try {
    res.status(200).json({
        message :"This is the Backend "
    })
} catch (error) {
    console.log('error:', error)
    next(error)
}
} )

app.use('/api/v1/auth', authRouter)
app.use('/api/v1/snippet', snippet)

// live server 
console.log('PORT:', PORT)
app.listen(PORT, ()=> console.log(`server is running http://localhost:${PORT} `));
