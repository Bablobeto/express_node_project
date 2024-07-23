import { User } from "../entities/user.entity";
export declare class UserDto {
    id?: string;
    name: string;
    static fromJson(data: {
        [key: string]: any;
    }): UserDto;
    static toJson(user: User): object;
    static toArray(users: User[]): object[];
}
