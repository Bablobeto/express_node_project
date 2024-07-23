import 'reflect-metadata';
import { Request, Response } from "express";
import IResponse from "../interfaces/IResponse";
export declare class TodoController {
    static createTodo(req: Request, res: Response): Promise<any>;
    static findAllTodos(req: Request, res: Response): Promise<any>;
    static findOneTodo(req: Request, res: Response): Promise<any>;
    static updateTodo(req: Request, res: Response): Promise<IResponse>;
    static deleteTodo(req: Request, res: Response): Promise<IResponse>;
    static clearTodo(req: Request, res: Response): Promise<any>;
}
