import { NextFunction, Request, Response } from "express";
import { HttpError } from "http-errors";
import ErrorResponse from "../interfaces/IError";
export declare function errorHandler(err: HttpError, _req: Request, res: Response, _next: NextFunction): Response<ErrorResponse>;
