"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoDto = void 0;
const class_validator_1 = require("class-validator");
class TodoDto {
    static fromJson(data) {
        const todo = new TodoDto();
        if (data === null || data === void 0 ? void 0 : data.id)
            todo.id = data.id;
        if (data === null || data === void 0 ? void 0 : data.title)
            todo.title = data.title;
        if (data === null || data === void 0 ? void 0 : data.description)
            todo.description = data.description;
        return todo;
    }
    static toJson(todo) {
        if (!todo) {
            return;
        }
        return {
            id: todo.id,
            name: todo.title,
            description: todo.description,
        };
    }
    static toArray(todos) {
        return todos.map((todo) => this.toJson(todo));
    }
}
exports.TodoDto = TodoDto;
__decorate([
    (0, class_validator_1.IsUUID)("all", { message: "Invalid ID", groups: [] }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", String)
], TodoDto.prototype, "id", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({ message: "Title is required", groups: ["create", "update"] }),
    __metadata("design:type", String)
], TodoDto.prototype, "title", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({ message: "Description is required", groups: ["create", "update"] }),
    __metadata("design:type", String)
], TodoDto.prototype, "description", void 0);
