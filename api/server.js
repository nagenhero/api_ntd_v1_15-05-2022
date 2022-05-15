import "dotenv/config";//environent variab;le lading ko lagi
import express from "express";//
const app = express();
const PORT = 8000;
//console.log(process.env);
//connnect to mongoDB
import { connectMongoDB } from "./src/config/dbConfig.js";
connectMongoDB();

app.use(express.json());
// Task api endpoints
import taskRouter from "./src/routers/taskRouter.js";
app.use("/api/v1/tasks", taskRouter);

app.get("/", (req, res) => {
  res.json({
    message: "You have reached the not to do api server",
  });
});

app.listen(PORT, (error) => {
  error && console.log(error);

  console.log(`Server is running on http://localhost:${PORT}`);
});
