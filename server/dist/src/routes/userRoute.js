"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = require("../controllers/userController");
const userRoutes = (0, express_1.Router)();
userRoutes.get("/", userController_1.getUsers);
userRoutes.post("/", userController_1.createUser);
exports.default = userRoutes;
