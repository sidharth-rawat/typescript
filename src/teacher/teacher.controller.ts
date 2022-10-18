import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { BaseController } from "../controller/base.controller";
import { http_formatter } from "../util";
import { ITeacher, Teacher } from "./teacher.schema";

class TeacherController extends BaseController<ITeacher> {

    public async getHottestTeacher(req: Request, res: Response){
        try {
            const hotTeacher = await this.model.find({
                age : {
                    $lte: 21
                },
                beautiful: true
            });
    
            return res.status(StatusCodes.OK).json(
                http_formatter(hotTeacher)
            )
        } catch (error) {
            this.errorHandler(res, error)
        }
    }
}

export const _teacherController = new TeacherController(Teacher);