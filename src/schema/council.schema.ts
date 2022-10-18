import { Document, model, Schema } from "mongoose";
import { isEmail } from "../util";

export const AllowedDesignations = [
    'president' , 'secretary' ,
    'tech head' , 'treasurer' , 
    'vice president' , 'pr head' ,
    'corporate head' , 'logistic head',
    'member'
] as const;

export type Designation = typeof AllowedDesignations[number];

export interface ICouncil extends Document {
    name: string,
    phone: number,
    email: string,
    society: string,
    startDate: Date,
    endDate: Date,
    designation: Designation
}

const councilSchema = new Schema<ICouncil>({
    name: {
        type: String,
        minlength: 2,
        require: [true, 'Name is mandatory'],
        trim: true,
    },
    phone: {
        type: Number,
        require: [true, 'Name is mandatory'],
        unique: true,
    },
    email: {
        type: String,
        require: true,
        unique: true,
        validate: [isEmail, 'Please enter a valid email']
    },
    society: {
        type: String,
        require: true,
    },
    startDate: {
        type: Date,
        default: Date.now,
        require: false,
    },
    endDate: {
        type: Date,
        require: true,
    },
    designation: {
        enum: AllowedDesignations,
        default: 'member',
    }
}, {
    timestamps: true,
    versionKey: true,
})

export const Council = model<ICouncil>('Council', councilSchema);