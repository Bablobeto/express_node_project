import express from "express";
import { displayRoutes } from "../utils/route.utils";
import userRoutes from "./user.route";
import todoRoutes from "./todo.route";

const indexRoute = express.Router();
indexRoute.get("/", (_req, res, _next) => {
  res.success("Welcome!");
});

export const v1RoutePrefix = "";//"/api/v1";
export const v1Routes = [indexRoute, todoRoutes];

displayRoutes(v1RoutePrefix, v1Routes);
