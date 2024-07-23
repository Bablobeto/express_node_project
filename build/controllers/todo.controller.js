"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoController = void 0;
require("reflect-metadata");
const todo_dto_1 = require("../dtos/todo.dto");
const todo_repo_1 = require("../repos/todo.repo");
class TodoController {
    static async createTodo(req, res) {
        try {
            const data = todo_dto_1.TodoDto.fromJson(req.body);
            await todo_repo_1.TodoRepo.create(data);
            res.redirect('/todos');
        }
        catch (error) {
            console.error('Error creating Todo:', error);
            res.status(500).send('Error creating Todo');
        }
    }
    static async findAllTodos(req, res) {
        try {
            const todo = await todo_repo_1.TodoRepo.findAll();
            res.render('index', { name: 'EB', tasks: todo });
        }
        catch (error) {
            console.error('Error fetching Todo:', error);
            return res.error("Todo not found!", error.message);
        }
    }
    static async findOneTodo(req, res) {
        try {
            const todo = await todo_repo_1.TodoRepo.findOne(req.params.todoId);
            res.render('edit', { 'name': "EB", task: todo });
        }
        catch (error) {
            return res.error("Todo not found!", error.message);
        }
    }
    static async updateTodo(req, res) {
        try {
            await todo_repo_1.TodoRepo.update(req.params.todoId, req.body);
            res.redirect("/todos");
        }
        catch (error) {
            return res.error("Todo not updated!", error.message);
        }
    }
    static async deleteTodo(req, res) {
        try {
            await todo_repo_1.TodoRepo.delete(req.params.todoId);
            res.redirect('/todos');
        }
        catch (error) {
            return res.error("Todo not deleted!", error.message);
        }
    }
    static async clearTodo(req, res) {
        try {
            await todo_repo_1.TodoRepo.clearAll();
            res.redirect('/todos');
        }
        catch (error) {
            return res.error("Todo not cleared!", error.message);
        }
    }
}
exports.TodoController = TodoController;
