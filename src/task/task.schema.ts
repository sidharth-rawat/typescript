import { Document, model, Schema } from "mongoose";
import {z} from 'zod';

const status_enum = [ 'todo', 'in progress', 'completed' ] as const;

export const TaskValidator = z.object({
    title: z.string().min(2).max(50),
    description: z.string().max(200).optional(),
    status: z.enum(status_enum).default("todo")
})

export type Task = z.infer<typeof TaskValidator>;

export interface ITask extends Document, Task {}

const taskSchema = new Schema<ITask>({
    title: {
        type: String,
        required: true,
        trim: true,
        minlength: 2,
        maxlength: 50,
    },
    description: {
        type: String,
        required: false,
        default: "",
        trim: true,
        minlength: 2,
    },
    status: {
        enum: status_enum,
        default: 'todo'
    }
}, {
    versionKey: false,
    timestamps: true
});

export const Task = model<ITask>('Task', taskSchema);