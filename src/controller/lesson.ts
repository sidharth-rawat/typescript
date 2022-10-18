import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

let Student: any; // model or collection name

// CRUD operation are common.
// CREATE, READ, UPDATE, DELETE;

// Collection | Model

// ! READ
// query? page_no?
export const getAll = async (req: Request, res: Response) => {
    // try catch exist;
    const Students = await Student.find({});
    return res.status(StatusCodes.OK).json(Students);
}

// ! CREATE
// document - req.body?
export const createStudent = async (req: Request, res: Response) => {
    const newStudent = await Student.create(req.body);
    return res.status(StatusCodes.CREATED).json(newStudent);
}

// ! UPDATE
// query - id? updatedDocument?
export const updateStudent = async (req: Request, res: Response) => {
    const id = '1212';
    const newStudent = await Student.findByIdAndUpdate(id, req.body);
    return res.status(StatusCodes.CREATED).json(newStudent);
}


// ! delete
// id? 
export const deleteStudent = async (req: Request, res: Response) => {
    const id = '1212';
    const newStudent = await Student.findByIdAndDelete(id);
    return res.status(StatusCodes.CREATED).json(newStudent);
}



class Papa {
    constructor(wife: string){

    }
}

class Roy extends Papa {
    public mom: string;
    constructor(girlfriend: string){
        const _mom: string = "roy's mom"; // local variable;
        super(_mom);
        this.mom = _mom;
    }
}

const chotaRoy = new Roy("bhabhi");

