import { Council, ICouncil } from "../schema/council.schema";
import { BaseController } from "./base.controller";

class CouncilController extends BaseController<ICouncil> {}

export const _councilController = new CouncilController(Council);