import { Router } from "express";
import { getTasks } from "../controllers/taskController";

const taskRoutes = Router();

taskRoutes.get('/', getTasks);

export default taskRoutes;