"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoRepo = void 0;
const database_1 = __importDefault(require("../utils/database"));
const todo_entity_1 = require("../entities/todo.entity");
class TodoRepo {
    static getRepository() {
        return database_1.default.getRepository(todo_entity_1.Todo);
    }
    static async create(data) {
        try {
            const todoRepository = this.getRepository();
            const newTodo = todoRepository.create(data);
            return await todoRepository.save(newTodo);
        }
        catch (error) {
            throw error;
        }
    }
    static async findAll() {
        try {
            const todoRepository = this.getRepository();
            return await todoRepository.find();
        }
        catch (error) {
            throw error;
        }
    }
    static async findOne(id) {
        try {
            const todoRepository = this.getRepository();
            return await todoRepository.findOne({ where: { id } });
        }
        catch (error) {
            throw error;
        }
    }
    static async update(id, data) {
        try {
            const todoRepository = this.getRepository();
            await todoRepository.update(id, data);
            return await this.findOne(id);
        }
        catch (error) {
            throw error;
        }
    }
    static async delete(id) {
        try {
            const todoRepository = this.getRepository();
            await todoRepository.delete(id);
        }
        catch (error) {
            throw error;
        }
    }
    static async clearAll() {
        try {
            const todoRepository = this.getRepository();
            await todoRepository.clear();
        }
        catch (error) {
            throw error;
        }
    }
}
exports.TodoRepo = TodoRepo;
