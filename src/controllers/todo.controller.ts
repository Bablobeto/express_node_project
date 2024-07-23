import 'reflect-metadata';
import { Request, Response } from "express";
import IResponse from "../interfaces/IResponse";
import { Todo } from "../entities/todo.entity";
import DataSource from "../utils/database";
import { TodoDto } from '../dtos/todo.dto';
import { TodoRepo } from '../repos/todo.repo';

export class TodoController {
  static async createTodo(req: Request, res: Response): Promise<any> {
    try {
      const data = TodoDto.fromJson(req.body);
      await TodoRepo.create(data);
      res.redirect('/todos');
    } catch (error: any) {
      console.error('Error creating Todo:', error);
      res.status(500).send('Error creating Todo');
    }
  }

  static async findAllTodos(req: Request, res: Response): Promise<any> {
    try {
      const todo = await TodoRepo.findAll()
      res.render('index', { name: 'EB', tasks: todo });
    } catch (error) {
      console.error('Error fetching Todo:', error);
      return res.error("Todo not found!", error.message);
    }
  }

  static async findOneTodo(req: Request, res: Response): Promise<any> {
    try {
      const todo = await TodoRepo.findOne(req.params.todoId)
      res.render('edit', {'name': "EB", task: todo})
    } catch (error: any) {
      return res.error("Todo not found!", error.message);
    }
  }

  static async updateTodo(req: Request, res: Response): Promise<IResponse> {
    try {
      await TodoRepo.update(req.params.todoId, req.body)
      res.redirect("/todos");
    } catch (error: any) {
      return res.error("Todo not updated!", error.message);
    }
  }

  static async deleteTodo(req: Request, res: Response): Promise<IResponse> {
    try {
      await TodoRepo.delete(req.params.todoId)
      res.redirect('/todos')
    } catch (error: any) {
      return res.error("Todo not deleted!", error.message);
    }
  }

  static async clearTodo(req: Request, res: Response): Promise<any> {
    try {
      await TodoRepo.clearAll()
      res.redirect('/todos');
    } catch (error: any) {
      return res.error("Todo not cleared!", error.message);
    }
  }
}
