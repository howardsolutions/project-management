import express from "express";
import dotenv from "dotenv"
import bodyParser from "body-parser";
import cors from "cors"
import helmet from "helmet";
import morgan from "morgan";

// ROUTES import
import projectRoutes from "./routes/projectRoute";
import taskRoutes from "./routes/taskRoute";
import searchRoute from "./routes/searchRoute";

// Config ENV
dotenv.config()

const app = express();

app.use(express.json());

// secure Express apps by setting HTTP response headers.
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({
    policy: "cross-origin"
}));

// Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// CORS
app.use(cors());

app.use(morgan("common"));

// ROUTES
app.get("/", (req, res) => {
    res.send("This is default route")
});

app.use("/projects", projectRoutes);
app.use("/tasks", taskRoutes);
app.use("/search", searchRoute);

// SERVER
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));