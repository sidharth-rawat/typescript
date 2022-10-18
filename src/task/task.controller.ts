import { BaseController } from "../controller/base.controller";
import { ITask, Task } from "./task.schema";

class TaskController extends BaseController<ITask> {}

export const _taskController = new TaskController(Task);