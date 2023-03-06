import { Response, Request, NextFunction } from "express";
import { pool } from "../../dbconnection";
import { getAllActors } from "./querys/actorQuerys";


export async function readAllActors(req: Request, res: Response, next: NextFunction): Promise<void> {
    const result = await pool.query(getAllActors);
    res.send(result);
}
