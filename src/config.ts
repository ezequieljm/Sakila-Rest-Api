import { config } from "dotenv";

config();

export const PORT: string | number = process.env.PORT || 8080;

export const DB_HOST: string = process.env.DB_HOST || "localhost";

export const DB_USER: string = process.env.DB_USER || "gorz";

export const DB_PASSWORD: string = process.env.DB_PASSWORD || "left4dead2";

export const DB_PORT: any = process.env.DB_PORT || 3306;

export const DB_DATABASE: string = process.env.DB_DATABASE || "sakila";
