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
exports.UserDto = void 0;
const class_validator_1 = require("class-validator");
class UserDto {
    static fromJson(data) {
        const user = new UserDto();
        if (data === null || data === void 0 ? void 0 : data.id)
            user.id = data.id;
        if (data === null || data === void 0 ? void 0 : data.name)
            user.name = data.name;
        return user;
    }
    static toJson(user) {
        if (!user) {
            return;
        }
        return {
            id: user.id,
            name: user.name,
        };
    }
    static toArray(users) {
        return users.map((user) => this.toJson(user));
    }
}
exports.UserDto = UserDto;
__decorate([
    (0, class_validator_1.IsUUID)("all", { message: "Invalid ID", groups: [] }),
    __metadata("design:type", String)
], UserDto.prototype, "id", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({ message: "Name is required", groups: ["create", "update"] }),
    __metadata("design:type", String)
], UserDto.prototype, "name", void 0);
