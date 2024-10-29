import * as dotenv from "dotenv";
import express from "express";
import morgan from "morgan";
import errorHandler from "errorhandler";
import cors from "cors";
import jobsRouter from "./src/routes/jobsRoutes";
import { authRouter } from "./src/routes/authRoutes";

dotenv.config();

const app = express();
const appRouter = express.Router();
const PORT = process.env.PORT || 5000;

if (!process.env.PORT && PORT === undefined) {
  console.log(`Process env port is not defined`);
  process.exit(1);
}
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    allowedHeaders: ["Content-Type", "application/json"],
  })
);

app.use(express.json());
app.use(morgan("dev"));
app.use(errorHandler());

app.use("/api", appRouter);
appRouter.use("/jobs", jobsRouter);
appRouter.use("/auth", authRouter);

app.listen(PORT, () => {
  console.log(`Listening on port http://localhost:${PORT}`);
});
