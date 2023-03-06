import { Router } from "express";
import { readAllActors } from "../controllers/actor_controller/actor.controller";
import { requireJsonContent } from "../controllers/actor_controller/validators/validator";

const router: Router = Router();

// router.get("/read-all", [requireJsonContent, readAllActors]);
router.get("/read-all", requireJsonContent, readAllActors);

export default router;
