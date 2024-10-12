import { Router } from "express";
import { createTask, getTasks, updateTaskStatus } from "../controllers/taskController";

const taskRoutes = Router();

taskRoutes.get('/', getTasks);
taskRoutes.post('/', createTask);
taskRoutes.patch('/:taskId/status', updateTaskStatus);

export default taskRoutes;