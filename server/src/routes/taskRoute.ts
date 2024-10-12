import { Router } from "express";
import { createTask, getTasks } from "../controllers/taskController";

const taskRoutes = Router();

taskRoutes.get('/', getTasks);
taskRoutes.post('/', createTask);

export default taskRoutes;