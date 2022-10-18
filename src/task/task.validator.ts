import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { http_formatter } from "../util";
import { ITask, TaskValidator } from "./task.schema";

export const updateValidator = (req: Request, res: Response, next: NextFunction) => {
    const isValid = TaskValidator.parse(req.body);
    if(!isValid) {
        return res.status(StatusCodes.BAD_REQUEST).json(http_formatter({}, 'All felids are mandatory', false))
    }
    next();
}


export const createValidator = (req: Request, res: Response, next: NextFunction) => {
    const _task: ITask = req.body;
    let isValid = true;

    if(!_task.title || _task.title.length < 2 || _task.title.length > 50) {
        isValid = false;
    }

    if(!isValid) {
        return res.status(StatusCodes.BAD_REQUEST).json(http_formatter({}, 'All felids are mandatory', false))
    }
    next();
}