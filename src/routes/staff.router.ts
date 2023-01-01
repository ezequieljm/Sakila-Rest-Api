import { Router } from "express";
import { readAllStaff } from "../controllers/staff.controller";

const router: Router = Router();

router.get("/", readAllStaff);

export default router;
