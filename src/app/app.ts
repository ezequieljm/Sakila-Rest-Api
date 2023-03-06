import express, { NextFunction, Request, Response } from "express";
import customerRouter from "../routes/customer.routes";
import staffRouter from "../routes/staff.router";
import actorRouter from "../routes/actor.routes";
import morganBody from "morgan-body";
import {
    errorLogger,
    errorResponse,
    invalidPathHandler,
} from "./errorHandlers";

// Instance of application
const app: express.Application = express();

// Middleware functions

export function requestLogger(req: Request, res: Response, next: NextFunction): void {
    console.log(`${req.method} url:: ${req.url}`);
    next();
}

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
morganBody(app);

// Routes
app.use("/customer", customerRouter);
app.use("/staff", staffRouter);
app.use("/actor", actorRouter);

app.get('/productswitherror', (request, response) => {
  let error = new Error(`processing error in request at ${request.url}`)
  throw error
})


// Error Handlers
// app.use(requestLogger);
app.use(errorLogger);
app.use(errorResponse);
app.use(invalidPathHandler);

// Default route
app.get("*", function (req: Request, res: Response): void {
    res.status(404).send("Page not found");
});

export default app;
