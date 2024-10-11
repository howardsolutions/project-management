import { Router } from "express";
import { getProjects } from "../controllers/projectController";

const projectRoutes = Router();

projectRoutes.get('/', getProjects);

export default projectRoutes;