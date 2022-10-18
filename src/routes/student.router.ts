import express, { Router } from 'express';
import { _studentController } from '../controller/student.controller';

const studentRouter: Router = express.Router();

/*
    ============== old method =====================
    studentRouter.get('/all', getAllStudents)
    studentRouter.get('/:student_id', getAllStudents)
    studentRouter.post('/', ()=>{});
    studentRouter.put('/', ()=>{});
    studentRouter.delete('/', ()=>{});
*/

// new classic and sexy method.

// ! there's still a major issue that exist in the API, please find that...
// ! it's can be critical to server health.

studentRouter
    .get('/all', (req, res) => _studentController.find(res, {}))
    .get('/:id', (req, res) => _studentController.findOne(res, {_id: req.params.id}))
    .post('/', (req, res) => _studentController.create(res, req.body))
    .put('/:id', (req, res) => _studentController.update(res, req.params.id, req.body))
    .delete('/:id', (req, res) => _studentController.delete(res, req.params.id))

export { studentRouter };