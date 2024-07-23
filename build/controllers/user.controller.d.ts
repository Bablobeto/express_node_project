import { Request, Response } from "express";
import IResponse from "../interfaces/IResponse";
export declare class UserController {
    static createUser(req: Request, res: Response): Promise<IResponse>;
    static findAllUsers(req: Request, res: Response): Promise<IResponse>;
    static findOneUser(req: Request, res: Response): Promise<IResponse>;
    static updateUser(req: Request, res: Response): Promise<IResponse>;
    static deleteUser(req: Request, res: Response): Promise<IResponse>;
}
