import { Request, Response, Router } from "express";
import { _teacherController } from "./teacher.controller";
import { createTeacherValidator } from "./teacher.validator";

export const teacherRouter = Router();

teacherRouter
    .get('/', (req: Request, res: Response) => _teacherController.find(res, {}))
    .get('/hot', (req: Request, res: Response) => _teacherController.getHottestTeacher(req, res))
    .get('/:id', (req: Request, res: Response) => _teacherController.findOne(res, {_id: req.params.id}))
    .post('/', createTeacherValidator, (req, res) => _teacherController.create(res, req.body))
    .patch('/:id', (req, res) => _teacherController.update(res, req.params.id, req.body))
    .delete('/:id', (req, res) => _teacherController.delete(res, req.params.id));
