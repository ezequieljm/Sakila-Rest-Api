import { Router } from "express";
import { createANewCustomer, deleteCustomerById, readAllCustomer } from "../controllers/customer.controller";

const router: Router = Router();

router.get("/read_all", readAllCustomer);
router.post("/register", createANewCustomer);
router.delete("/delete/:id", deleteCustomerById);

export default router;
