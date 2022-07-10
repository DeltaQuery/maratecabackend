import mongoose from "mongoose"
import dotenv from 'dotenv'
dotenv.config()

const MONGODB_URI = `mongodb+srv://marateca:${process.env.PASSWORD}@cluster0.cvga0iw.mongodb.net/?retryWrites=true&w=majority`

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log("Connected to MongoDB")
}).catch(error => {
    console.log("Error connecting to MongoDB", error.message)
})
   