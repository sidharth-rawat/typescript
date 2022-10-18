import { Document, model, Schema } from "mongoose";

export interface IStudent extends Document {
    name: string,
    phone: number,
}

const studentSchema = new Schema<IStudent>({
    name:{
        type: String,
        require: [true, 'Student name is mandatory']
    },
    phone: {
        type: Number,
        unique: true,
        require: [true, 'Student phone is mandatory']
    }
}, {
    timestamps: true,
    versionKey: false
});

export const Student = model<IStudent>('Student', studentSchema);