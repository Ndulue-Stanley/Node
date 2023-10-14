import  express, { Application, Request, Response } from 'express'
import MainApp from './MainApp'

const port: number = 9988

const app:Application = express()
app.use(express.json())

MainApp(app)

const server = app.listen(port, ()=>{
    console.log();
    console.log(`Server is now connected`);
    
})

process.on("uncaughtException", (error:Error)=>{
    console.log("uncaughtException", error);
    process.exit(1)
})

process.on("rejectionHandled", (reason: any)=>{
    console.log("rejectionHandled", reason);
    
    server.close(()=>{
        process.exit(1);
    })
})