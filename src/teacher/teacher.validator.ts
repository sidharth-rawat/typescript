import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { http_formatter } from "../util";
import { _teacherController } from "./teacher.controller";
import { TeacherValidator } from "./teacher.schema";

export const createTeacherValidator = (req: Request, res: Response, next: NextFunction) => {
    const isValid = TeacherValidator.safeParse(req.body);
    if(isValid.success) {
        next();
    } else {
        return res.status(StatusCodes.BAD_REQUEST).json(
            http_formatter(isValid.error, "Teacher validation failed, please check", false)
        )
    }
}
