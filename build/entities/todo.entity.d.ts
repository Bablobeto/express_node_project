import { BaseEntity } from 'typeorm';
export declare class Todo extends BaseEntity {
    constructor(init?: Partial<Todo>);
    id?: string;
    title: string;
    description: string;
    completed?: boolean;
    created_at?: Date;
    updated_at?: Date;
}
