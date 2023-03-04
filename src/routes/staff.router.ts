import { Router } from "express";
import { readAllStaff } from "../controllers/staff_controller/staff.controller";

const router: Router = Router();

router.get("/", readAllStaff);

export default router;
