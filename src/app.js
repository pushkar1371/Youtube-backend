import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

//limit of json comming as response
//data coming from form
app.use(express.json({limit: "16kb"}))
//data comming from url
app.use(express.urlencoded({extended: true, limit: "16kb"}))
//public asset anyone can access,present in server
app.use(express.static("public"))
//fro cookie
app.use(cookieParser())

export { app }