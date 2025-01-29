import express from "express";
const app = express();
import mainRoute from "./Routes/authroute";
import cors from 'cors';


app.use(express.json());
app.use(cors())


app.use("/api/auth", mainRoute);


app
  .listen(2020, () => {
    console.log("server is running on 2020");
  })
  .on("error", (err) => {
    console.log(err);
  });
