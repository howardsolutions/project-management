import { Router } from "express";

import { createUser, getUsers } from "../controllers/userController";

const userRoutes = Router();

userRoutes.get("/", getUsers);
userRoutes.post("/", createUser);

export default userRoutes;
