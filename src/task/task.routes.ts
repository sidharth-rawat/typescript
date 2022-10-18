import { Request, Response, Router } from "express";
import { _taskController } from "./task.controller";
import { createValidator } from "./task.validator";

export const taskRouter = Router();

taskRouter
    .get('/', (req: Request, res: Response) => _taskController.find(res, {}))
    .get('/:id', (req: Request, res: Response) => _taskController.findOne(res, {_id: req.params.id}))
    .post('/', createValidator, (req, res) => _taskController.create(res, req.body))
    .patch('/:id', (req, res) => _taskController.update(res, req.params.id, req.body))
    .delete('/:id', (req, res) => _taskController.delete(res, req.params.id))