"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const todo_controller_1 = require("../controllers/todo.controller");
const todoRoutes = express_1.default.Router();
todoRoutes.get("/todos/", todo_controller_1.TodoController.findAllTodos);
todoRoutes.post("/todos/", todo_controller_1.TodoController.createTodo);
todoRoutes.get("/todos/:todoId/edit", todo_controller_1.TodoController.findOneTodo);
todoRoutes.post("/todos/:todoId/edit", todo_controller_1.TodoController.updateTodo);
todoRoutes.get("/todos/:todoId", todo_controller_1.TodoController.deleteTodo);
todoRoutes.post("/todos/clear", todo_controller_1.TodoController.clearTodo);
exports.default = todoRoutes;
