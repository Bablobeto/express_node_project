import { Todo } from "../entities/todo.entity";
import { TodoDto } from "../dtos/todo.dto";
export declare class TodoRepo {
    private static getRepository;
    static create(data: TodoDto): Promise<Todo>;
    static findAll(): Promise<Todo[]>;
    static findOne(id: string): Promise<Todo | null>;
    static update(id: string, data: Partial<TodoDto>): Promise<Todo>;
    static delete(id: string): Promise<void>;
    static clearAll(): Promise<void>;
}
