import cors from "cors";
import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.listen(5050,() =>{
    console.log("Server is running on port 5050");
});
