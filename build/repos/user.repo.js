"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepo = void 0;
class UserRepo {
    static async create(user) {
        try {
            return { id: "", name: "" };
        }
        catch (error) {
            throw error;
        }
    }
    static async findAll() {
        try {
            return [{ id: "", name: "" }];
        }
        catch (error) {
            throw error;
        }
    }
    static async findOne(userId) {
        try {
            return { id: "", name: "" };
        }
        catch (error) {
            throw error;
        }
    }
    static async update(userId, user) {
        try {
            return { id: "", name: "" };
        }
        catch (error) {
            throw error;
        }
    }
    static async delete(userId) {
        try {
            return { id: "", name: "" };
        }
        catch (error) {
            throw error;
        }
    }
}
exports.UserRepo = UserRepo;
