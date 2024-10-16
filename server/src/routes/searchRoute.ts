import { Router } from "express";
import { search } from "../controllers/searchController";

const searchRoute = Router();

searchRoute.get("/", search);

export default searchRoute;
