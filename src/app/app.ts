import express, { Request, Response } from "express";
import customerRouter from "../routes/customer.routes";
import morganBody from "morgan-body";

// Instance of application
const app: express.Application = express();

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
morganBody(app);

// Routes
app.use("/customer", customerRouter);

// Default route
app.get("*", function (req: Request, res: Response): void {
    res.status(404).send("Page not found");
});

export default app;
