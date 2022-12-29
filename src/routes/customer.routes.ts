import { Router } from "express";
import {
    createANewCustomer,
    deleteCustomerById,
    readAllCustomer,
    updateCustomerById,
} from "../controllers/customer.controller";

const router: Router = Router();

router.get("/read_all", readAllCustomer);

router.post("/register", createANewCustomer);

router.put("/update/:id", updateCustomerById);

router.delete("/delete/:id", deleteCustomerById);

export default router;
