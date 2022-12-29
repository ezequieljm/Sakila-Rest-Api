import { Router } from "express";
import { createANewCustomer, readAllCustomer } from "../controllers/customer.controller";

const router: Router = Router();

router.get("/read_all", readAllCustomer);
router.post("/register", createANewCustomer);

export default router;
