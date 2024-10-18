import { Router } from "express";
import { createTask, getTasks, getUserTasks, updateTaskStatus } from "../controllers/taskController";

const taskRoutes = Router();

taskRoutes.get('/', getTasks);
taskRoutes.post('/', createTask);
taskRoutes.patch('/:taskId/status', updateTaskStatus);
taskRoutes.get('/user/:userId', getUserTasks);

export default taskRoutes;