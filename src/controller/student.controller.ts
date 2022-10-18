import { IStudent, Student } from "../schema/student.schema";
import { BaseController } from "./base.controller";

class StudentController extends BaseController<IStudent> {
    // constructor(public model: Model<IStudent>) {
    //     super(model);
    // }
}

export const _studentController = new StudentController(Student);
