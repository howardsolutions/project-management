"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const projectController_1 = require("../controllers/projectController");
const projectRoutes = (0, express_1.Router)();
projectRoutes.get('/', projectController_1.getProjects);
projectRoutes.post('/', projectController_1.createProject);
exports.default = projectRoutes;
