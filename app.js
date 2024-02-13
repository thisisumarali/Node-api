import express from "express";
import userRouter from "./routes/user.js";
import taskRouter from "./routes/task.js";
import { config } from "dotenv";
import cookieParser from "cookie-parser";
import { errorMiddleware } from "./middlewares/error.js";
import cors from "cors";

export const app = express();
config({
  path: "./data/config.env",
});

//Using  Middleware

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["GET", "PUT", "POST", "DELETE"],
    credentials: true,  
  })
);
//Using Routes
app.use("/api/v1/users", userRouter);
app.use("/api/v1/task", taskRouter);

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Nice");
});

app.use(errorMiddleware);
