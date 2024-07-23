"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const user_repo_1 = require("../repos/user.repo");
const user_dto_1 = require("../dtos/user.dto");
class UserController {
    static async createUser(req, res) {
        try {
            const data = user_dto_1.UserDto.fromJson(req.body);
            const user = await user_repo_1.UserRepo.create(data);
            return res.success("User created.", user_dto_1.UserDto.toJson(user));
        }
        catch (error) {
            return res.error("User not created!", error.message);
        }
    }
    static async findAllUsers(req, res) {
        try {
            const users = await user_repo_1.UserRepo.findAll();
            return res.success("All users.", user_dto_1.UserDto.toArray(users));
        }
        catch (error) {
            return res.error("Users not found!", error.message);
        }
    }
    static async findOneUser(req, res) {
        try {
            const user = await user_repo_1.UserRepo.findOne(req.params.userId);
            return res.success("User details.", user_dto_1.UserDto.toJson(user));
        }
        catch (error) {
            return res.error("User not found!", error.message);
        }
    }
    static async updateUser(req, res) {
        try {
            const data = user_dto_1.UserDto.fromJson(req.body);
            const user = await user_repo_1.UserRepo.update(req.params.userId, data);
            return res.success("User updated.", user_dto_1.UserDto.toJson(user));
        }
        catch (error) {
            return res.error("User not updated!", error.message);
        }
    }
    static async deleteUser(req, res) {
        try {
            const user = await user_repo_1.UserRepo.delete(req.params.userId);
            return res.success("User deleted.", user_dto_1.UserDto.toJson(user));
        }
        catch (error) {
            return res.error("User not deleted!", error.message);
        }
    }
}
exports.UserController = UserController;
