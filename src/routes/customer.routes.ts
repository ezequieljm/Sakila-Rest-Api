import { Router } from "express";
import {
    registerANewCustomer,
    deleteCustomerById,
    readAllCustomer,
    updateCustomerById,
} from "../controllers/customer_controller/customer.controller";

const router: Router = Router();

router.get("/read_all", readAllCustomer);

router.post("/register", registerANewCustomer);

router.put("/update/:id", updateCustomerById);

router.delete("/delete/:id", deleteCustomerById);

export default router;
