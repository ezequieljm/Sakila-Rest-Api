import { Router } from "express";
import { readAllCustomer } from "../controllers/customer.controller";

const router: Router = Router();

router.get('/', readAllCustomer);

export default router;

