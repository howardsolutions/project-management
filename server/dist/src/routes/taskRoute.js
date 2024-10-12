"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const taskController_1 = require("../controllers/taskController");
const taskRoutes = (0, express_1.Router)();
taskRoutes.get('/', taskController_1.getTasks);
taskRoutes.post('/', taskController_1.createTask);
taskRoutes.patch('/:taskId/status', taskController_1.updateTaskStatus);
exports.default = taskRoutes;
