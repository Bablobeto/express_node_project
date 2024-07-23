import { UserDto } from "../dtos/user.dto";
import { User } from "../entities/user.entity";
export declare class UserRepo {
    static create(user: UserDto): Promise<User>;
    static findAll(): Promise<User[]>;
    static findOne(userId: User["id"]): Promise<User>;
    static update(userId: User["id"], user: UserDto): Promise<User>;
    static delete(userId: User["id"]): Promise<User>;
}
