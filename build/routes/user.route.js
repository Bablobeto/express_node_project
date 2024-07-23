"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("../controllers/user.controller");
const user_dto_1 = require("../dtos/user.dto");
const middlewares_1 = require("../middlewares");
const userRoutes = express_1.default.Router();
userRoutes.post("/users", (0, middlewares_1.validator)(user_dto_1.UserDto, "create"), user_controller_1.UserController.createUser);
userRoutes.get("/users", user_controller_1.UserController.findAllUsers);
userRoutes.get("/users/:userId", user_controller_1.UserController.findOneUser);
userRoutes.patch("/users/:userId", (0, middlewares_1.validator)(user_dto_1.UserDto, "update"), user_controller_1.UserController.updateUser);
userRoutes.delete("/users/:userId", user_controller_1.UserController.deleteUser);
exports.default = userRoutes;
