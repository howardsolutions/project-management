"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const searchController_1 = require("../controllers/searchController");
const searchRoute = (0, express_1.Router)();
searchRoute.get("/", searchController_1.search);
exports.default = searchRoute;
