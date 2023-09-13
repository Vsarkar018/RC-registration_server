require("dotenv").config();
require("express-async-errors");
const express = require("express");

const errorHandlerMiddleware = require("./error-handler");
const app = express();
app.use(require("cors")());
app.use(express.json());
const mongoose = require("mongoose");
const connectDB = () => {
  return mongoose.connect(
    "mongodb+srv://vsarkar018:getmein018@nodejsprojects.1mv6s7n.mongodb.net/RecruitmentData?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );
};
const router = require("./Router");
app.use("/", router);
app.use(errorHandlerMiddleware);

const port = 5000 || process.env.PORT;
async function start() {
  await connectDB();
  app.listen(port, () =>
    console.log(`Server is listneing on the port ${port}`)
  );
}
start();
