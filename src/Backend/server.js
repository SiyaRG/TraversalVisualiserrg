const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");
const serverless = require("serverless-http");
const feedBackRoutes = require("./Routes/Feedbacks.js");

const app = express();

//middleware
app.use(cors());
app.use(express.json());
app.use((request, response, next) => {
    console.log(request.path, request.method);
    next();
});

//routes
app.use("/api/feedbacks", feedBackRoutes);
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        /*app.listen(process.env.PORT, () => {
            console.log("Connected and Listening on Port", process.env.PORT);
        });*/
    })
    .catch(error => {
        console.log(error);
    });
module.exports.handler = serverless(app)