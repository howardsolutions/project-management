import { Router } from "express";
import { createProject, getProjects } from "../controllers/projectController";

const projectRoutes = Router();

projectRoutes.get('/', getProjects);
projectRoutes.post('/', createProject);

export default projectRoutes;