import { Document, model, Schema } from "mongoose";
import { z } from 'zod';

const designation_enum = [
    "kinder garden", "pgt", "tgt", "manager", "principal"
] as const;

export const TeacherValidator = z.object({
    name: z.string().min(2).max(50).trim(),
    phone: z.number().min(10),
    email: z.string().email().trim(),
    designation: z.enum(designation_enum).default("kinder garden").optional(),
    isDeleted: z.boolean().default(false).optional()
});

export type Teacher = z.infer<typeof TeacherValidator>;

export interface ITeacher extends Document, Teacher {}

const teacherSchema = new Schema<ITeacher>({
    name: {
        type: String,
        required: true,
    },
    phone: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    designation: {
        enum: designation_enum,
        default: 'kinder garden'
    },
    isDeleted: {
        type: Boolean, 
        default: false,
    }
}, {
    timestamps: true,
    versionKey: false
});

export const Teacher = model<ITeacher>("Teacher", teacherSchema);