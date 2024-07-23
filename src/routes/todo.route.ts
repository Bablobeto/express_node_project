import 'reflect-metadata';
import express from "express";
import { TodoController } from "../controllers/todo.controller";
// import { validator } from "../middlewares";

const todoRoutes = express.Router();

todoRoutes.get("/todos/", TodoController.findAllTodos);
todoRoutes.post("/todos/", TodoController.createTodo);
todoRoutes.get("/todos/:todoId/edit", TodoController.findOneTodo);
todoRoutes.post("/todos/:todoId/edit", TodoController.updateTodo);
todoRoutes.get("/todos/:todoId", TodoController.deleteTodo);
todoRoutes.post("/todos/clear", TodoController.clearTodo);

export default todoRoutes;
