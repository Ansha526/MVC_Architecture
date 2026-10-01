import cors from "cors";
import express from "express";
import dotenv from "dotenv";
import productsRouter from "./routes/products.js";
import {connectDB} from "./utils/DB.js";
import dns from "node:dns/promises";
dns.setServers(["1.1.1.1", "8.8.8.8"]);

dotenv.config();

import {verifyJWT, signJWT} from "./utils/jwt.js";

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use("/products", productsRouter);

app.listen(5050,() =>{
    console.log("Server is running on port 5050");
});


const token = signJWT({ 
    name: "Ansha Ateeq",
    userId: "12345",
    userType: "admin"
});

console.log(token);

console.log(verifyJWT("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiQW5zaGEgQXRlZXEiLCJ1c2VySWQiOiIxMjM0NSIsInVzZXJUeXBlIjoiYWRtaW4iLCJpYXQiOjE3OTA4NDkzMzAsImV4cCI6MTc5MDg0OTYzMH0.qBg9GrjUUEOms4YJ9zEPDcwEtZZFIVGjvvFM5SlZn9E"));
