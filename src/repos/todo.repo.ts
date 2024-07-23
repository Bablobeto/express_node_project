import { Repository } from "typeorm";
import AppDataSource from '../utils/database';
import { Todo } from "../entities/todo.entity";
import { TodoDto } from "../dtos/todo.dto";

export class TodoRepo {
  private static getRepository(): Repository<Todo> {
    return AppDataSource.getRepository(Todo);
  }

  static async create(data: TodoDto): Promise<Todo> {
    try {
      const todoRepository = this.getRepository();
      const newTodo = todoRepository.create(data);
      return await todoRepository.save(newTodo);
    } catch (error) {
      throw error;
    }
  }

  static async findAll(): Promise<Todo[]> {
    try {
      const todoRepository = this.getRepository();
      return await todoRepository.find();
    } catch (error) {
      throw error;
    }
  }

  static async findOne(id: string): Promise<Todo | null> {
    try {
      const todoRepository = this.getRepository();
      return await todoRepository.findOne({ where: { id } });
    } catch (error) {
      throw error;
    }
  }

  static async update(id: string, data: Partial<TodoDto>): Promise<Todo> {
    try {
      const todoRepository = this.getRepository();
      await todoRepository.update(id, data);
      return await this.findOne(id);
    } catch (error) {
      throw error;
    }
  }

  static async delete(id: string): Promise<void> {
    try {
      const todoRepository = this.getRepository();
      await todoRepository.delete(id);
    } catch (error) {
      throw error;
    }
  }

  static async clearAll(): Promise<void> {
    try {
      const todoRepository = this.getRepository();
      await todoRepository.clear()
      // await todoRepository.query("DELETE FROM todo WHERE id > 0");
    } catch (error) {
      throw error;
    }
  }
}
