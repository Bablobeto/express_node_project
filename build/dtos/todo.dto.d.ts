import { Todo } from "../entities/todo.entity";
export declare class TodoDto {
    id: string;
    title: string;
    description: string;
    static fromJson(data: {
        [key: string]: any;
    }): TodoDto;
    static toJson(todo: Todo): object;
    static toArray(todos: Todo[]): object[];
}
